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

    @PostMapping("/addBlog/{userId}")
    public ResponseEntity<String> addNewBlog(@RequestParam("cardImage") MultipartFile cardImage,@RequestParam("blogJson") String blogJson,@PathVariable int userId) throws IOException {
        return iBlogService.addBlog(cardImage,blogJson,userId);
    }

    @GetMapping("/getAllBlogs")
    public ResponseEntity<List<Blog>> findAllBlogs(){
        return iBlogService.getAllBlogs();
    }

    @GetMapping("/getBlogById/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id){
        return iBlogService.getBlogById(id);
    }
}
