package com.lesego.daycarebackend.Service.BlogServices;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.BlogRepo.BlogRepo;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Reusables.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class BlogService implements IBlogService{
    @Autowired
    private BlogRepo blogRepo;
    @Autowired
    private UserRepository userRepository;
    @Override
    public ResponseEntity<String> addBlog(MultipartFile cardImage, String blogJson, Integer userId) {
        //Parse the Json String to a User object
        ObjectMapper objectMapper = new ObjectMapper();
        User user = userRepository.findById(userId).orElseThrow();

        Blog blog ;
        try{

            System.out.println("BlogJson" + blogJson);
            System.out.println("blog:" + objectMapper.readValue(blogJson,Blog.class)) ;
            blog = objectMapper.readValue(blogJson,Blog.class);
            System.out.println("Json blog:" + blog);
            blog.setUser(user);

        }catch(JsonProcessingException e){
            throw new IllegalArgumentException("Invalid blog JSON format");
        }

        try{
            blog.setCardImage(ImageUtils.compressImage(cardImage.getBytes()));
        }catch(IOException e){
            throw new IllegalArgumentException("Could not process image file");
        }

        blogRepo.save(blog);
        return ResponseEntity.ok("Blog added successfully");
    }
}
