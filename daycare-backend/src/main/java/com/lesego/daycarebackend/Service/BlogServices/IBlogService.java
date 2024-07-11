package com.lesego.daycarebackend.Service.BlogServices;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
/**
 * Interface for defining Blog service operations.
 * author Mhlongo Lesego
 */
public interface IBlogService {
    /**
     * Adds a new blog post.
     *
     * @param cardImage the image file for the blog post
     * @param blog  JSON string representing the blog post data
     * @param userId    the ID of the user creating the blog post
     * @return a ResponseEntity indicating the result of the add operation
     * @throws IOException if there is an error processing the image file
     */
    public ResponseEntity<String> addBlog(MultipartFile cardImage, String blog, int userId) throws IOException;
    /**
     * Retrieves all blog posts.
     *
     * @return a ResponseEntity containing a list of Blog objects
     */
    public ResponseEntity<List<Blog>> getAllBlogs();
    /**
     * Retrieves a blog post by its ID.
     *
     * @param id the ID of the blog post
     * @return a ResponseEntity containing the Blog object
     */
    public ResponseEntity<Blog> getBlogById(int id);
    /**
     * Updates an existing blog post.
     *
     * @param cardImage the new image file for the blog post
     * @param blogJson  JSON string representing the updated blog post data
     * @param id        the ID of the blog post to update
     * @return a ResponseEntity indicating the result of the update operation
     */
    public ResponseEntity<String> updateBlog(MultipartFile cardImage, String blogJson, int id);

    /**
     * Deletes a blog post by its ID.
     *
     * @param id the ID of the blog post to delete
     * @return a ResponseEntity indicating the result of the delete operation
     */
    public ResponseEntity<String> deleteBlog(int id);
}
