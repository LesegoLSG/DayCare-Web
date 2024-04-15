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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

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
        blog.setCardImage(ImageUtils.compressImage(cardImage.getBytes()));

        // Save the blog
        blogRepo.save(blog);
        return ResponseEntity.ok("Blog added successfully");
    }

    @Override
    public ResponseEntity<List<Blog>> getAllBlogs() {

       try{
           List<Blog> blogList = blogRepo.findAllWithUsers();
            System.out.println("Length of blog: " + blogList);
           // Decompress images for each blog and its associated user
           for (Blog blog : blogList) {
               System.out.println("User: " + blog.getUser().getFirstName() + " " + blog.getUser().getLastName());
               System.out.println("blog:" + blog.getTitle());
               // Decompress blog image
               if (blog.getCardImage() != null) {
                   blog.setCardImage(ImageUtils.decompressImage(blog.getCardImage()));
               }
               // Decompress user image
               User user = blog.getUser();
               if (user != null && user.getImage() != null) {
                   user.setImage(ImageUtils.decompressImage(user.getImage()));
               }
           }

           return ResponseEntity.ok(blogList);

       }catch(Throwable e){
           System.out.println(e.getMessage());
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
       }

    }
}