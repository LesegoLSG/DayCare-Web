package com.lesego.daycarebackend.Service.BlogServices;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.BlogRepo.BlogRepo;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Reusables.ImageUtils;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
/**
 * Service class for handling Blog operations.
 * author Mhlongo Lesego
 */
@Service
public class BlogService implements IBlogService{
    @Autowired
    private final BlogRepo blogRepo;
    @Autowired
    private final UserRepository userRepository;

    public BlogService(BlogRepo blogRepo, UserRepository userRepository) {
        this.blogRepo = blogRepo;
        this.userRepository = userRepository;
    }

    /**
     * Adds a new blog post.
     *
     * @param cardImage the image file for the blog post
     * @param blogJson JSON string representing the blog post data
     * @param userId the ID of the user creating the blog post
     * @return a ResponseEntity indicating the result of the add operation
     * @throws IOException if there is an error processing the image file
     */
    @Override
    public ResponseEntity<String> addBlog(MultipartFile cardImage, String blogJson, int userId) throws IOException {
        // Get user by ID
        User existingUser = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));


        // Register LocalDate deserializer with custom date format
        ObjectMapper objectMapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        objectMapper.registerModule(module);
        Blog blog;
        try {

            blog = objectMapper.readValue(blogJson, Blog.class);

        } catch (Throwable e) {
            System.out.println("My Error clarity:" + e.getMessage());
            throw new IllegalArgumentException("Invalid blog JSON format");

        }

        // Set user and card image to blog
        blog.setUser(existingUser);
        if(cardImage != null && !cardImage.isEmpty()){
            blog.setCardImage(ImageUtils.compressImage(cardImage.getBytes()));
        }
        // Save the blog
        blogRepo.save(blog);
        return ResponseEntity.ok("Blog added successfully");
    }

    /**
     * Retrieves all blog posts with associated users.
     *
     * @return a ResponseEntity containing a list of Blog objects
     */
    @Override
    public ResponseEntity<List<Blog>> getAllBlogs() {
        try {
            List<Blog> blogList = blogRepo.findAllWithUsers();

            for (Blog blog : blogList) {
                User user = blog.getUser();
                if(blog.getCardImage() != null){
                    blog.setCardImage(ImageUtils.decompressImage(blog.getCardImage()));
                }
            }

            return ResponseEntity.ok(blogList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Retrieves a blog post by its ID.
     *
     * @param id the ID of the blog post
     * @return a ResponseEntity containing the Blog object
     */
    @Override
    public ResponseEntity<Blog> getBlogById(int id) {
        try {
            // Fetch the blog by ID
            Optional<Blog> blogOptional = blogRepo.findByIdWithUser(id);

            if (blogOptional.isEmpty()) {
                return ResponseEntity.notFound().build(); // Return 404 if blog not found
            }
            Blog blog = blogOptional.get();
            // Decompress the card image if it exists
            if (blog.getCardImage() != null) {
                blog.setCardImage(ImageUtils.decompressImage(blog.getCardImage()));
            }
            return ResponseEntity.ok(blog);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Updates an existing blog post.
     *
     * @param cardImage the new image file for the blog post
     * @param blogJson JSON string representing the updated blog post data
     * @param id the ID of the blog post to update
     * @return a ResponseEntity indicating the result of the update operation
     */
    @Override
    public ResponseEntity<String> updateBlog(MultipartFile cardImage, String blogJson, int id) {
        Optional<Blog> blogOptional = blogRepo.findById(id);

        if(blogOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        Blog blogToUpdate = blogOptional.get();

        //Mapper
        ObjectMapper objectMapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        objectMapper.registerModule(module);
        Blog myNewBlog;


        //Update the blog details
        try{
            System.out.println("1");
            myNewBlog = objectMapper.readValue(blogJson, Blog.class);
            blogToUpdate.setTitle(myNewBlog.getTitle());
            blogToUpdate.setTopic(myNewBlog.getTopic());
            blogToUpdate.setContent(myNewBlog.getContent());
            blogToUpdate.setDate(myNewBlog.getDate());
            blogToUpdate.setCategory(myNewBlog.getCategory());
            blogToUpdate.setStatus(myNewBlog.getStatus());
            System.out.println("2");

            if(cardImage != null && !cardImage.isEmpty()){

                try{
                    blogToUpdate.setCardImage(ImageUtils.compressImage(cardImage.getBytes()));

                }catch (IOException e){
                    throw new IllegalArgumentException("Error processing image file");
                }

            }

            // Save the updated blog
            blogRepo.save(blogToUpdate);
            return ResponseEntity.ok("Blog updated successfully");

        }catch(JsonProcessingException e){
            throw new IllegalArgumentException("Invalid blog JSON format");
        }


    }

    /**
     * Deletes a blog post by its ID.
     *
     * @param id the ID of the blog post to delete
     * @return a ResponseEntity indicating the result of the delete operation
     */
    @Override
    public ResponseEntity<String> deleteBlog(int id) {
        Optional<Blog> blogOptional = blogRepo.findById(id);

        if (blogOptional.isEmpty()) {
            return ResponseEntity.notFound().build(); // Return 404 if blog not found
        }
        blogRepo.deleteById(id); // Delete the blog
        return ResponseEntity.ok("Blog deleted successfully");
    }
}
