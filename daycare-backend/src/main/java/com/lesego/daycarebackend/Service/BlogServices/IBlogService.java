package com.lesego.daycarebackend.Service.BlogServices;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface IBlogService {
    public ResponseEntity<String> addBlog(MultipartFile cardImage, String blog, Integer userId);
}
