package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Service.BlogServices.IBlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/blog")
@RequiredArgsConstructor
public class BlogController {
    @Autowired
    private IBlogService iBlogService;

    //Adding a blog
    @PostMapping("/addBlog/{userId}")
    public ResponseEntity<String> addNewBlog(@RequestParam(value = "cardImage", required = false) MultipartFile cardImage,@RequestParam("blogJson") String blogJson,@PathVariable int userId) throws IOException {
        return iBlogService.addBlog(cardImage,blogJson,userId);
    }
    //Getting all blogs
    @GetMapping("/getAllBlogs")
    public ResponseEntity<List<Blog>> findAllBlogs(){
        System.out.println("getAllBlogs Controller reached");
        return iBlogService.getAllBlogs();
    }
    //Get a single blog by id
    @GetMapping("/getBlogById/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id){
        System.out.println("id " + id);
        return iBlogService.getBlogById(id);
    }
    //Update blog
    @PutMapping("/updateBlog/{id}")
    public ResponseEntity<String> updateBlog(@RequestParam(value = "cardImage", required = false) MultipartFile cardImage,@RequestParam("blogJson") String blogJson , @PathVariable int id){
        return iBlogService.updateBlog(cardImage,blogJson,id);
    }
    //Delete a blog through an id
    @DeleteMapping("/deleteBlogById/{id}")
    public ResponseEntity<String> deleteBlogById(@PathVariable int id){
        return iBlogService.deleteBlog(id);
    }
}
