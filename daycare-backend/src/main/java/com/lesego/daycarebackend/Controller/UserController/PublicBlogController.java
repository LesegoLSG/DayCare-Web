package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Service.BlogServices.IBlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/publicBlog")
public class PublicBlogController {
    @Autowired
    public final IBlogService iBlogService;


    public PublicBlogController(IBlogService iBlogService) {
        this.iBlogService = iBlogService;
    }

    //Get a list of blog
    @GetMapping("/getAllBlogs")
    public ResponseEntity<List<Blog>> getAllBlogs(){
        return iBlogService.getAllBlogs();
    }
}
