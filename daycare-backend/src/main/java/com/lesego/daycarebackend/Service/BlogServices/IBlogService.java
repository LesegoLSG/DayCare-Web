package com.lesego.daycarebackend.Service.BlogServices;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IBlogService {
    public ResponseEntity<String> addBlog(MultipartFile cardImage, String blog, int userId) throws IOException;
    public ResponseEntity<List<Blog>> getAllBlogs();

    public ResponseEntity<Blog> getBlogById(int id);
    public ResponseEntity<String> updateBlog(MultipartFile cardImage, String blogJson, int id);

    public ResponseEntity<String> deleteBlog(int id);
}
