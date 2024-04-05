package com.lesego.daycarebackend.Repository.BlogRepo;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepo extends JpaRepository<Blog,Integer> {
    // Define a query to fetch blogs with associated users eagerly loaded
    @Query("SELECT b FROM Blog b JOIN FETCH b.user")
    List<Blog> findAllWithUsers();
}
