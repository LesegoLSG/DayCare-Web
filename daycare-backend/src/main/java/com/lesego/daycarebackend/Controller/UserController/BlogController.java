package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Service.BlogServices.IBlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/blog")
@RequiredArgsConstructor
public class BlogController {
    @Autowired
    private IBlogService iBlogService;

    @PostMapping("/addBlog")
    public ResponseEntity<String> addNewBlog(@RequestParam("cardImage") MultipartFile cardImage,@RequestParam("blog") String blogJson,@RequestParam("userId") Integer userId){
        return iBlogService.addBlog(cardImage,blogJson,userId);
    }
}
