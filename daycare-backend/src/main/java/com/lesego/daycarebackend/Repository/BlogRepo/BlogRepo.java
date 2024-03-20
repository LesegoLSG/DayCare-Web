package com.lesego.daycarebackend.Repository.BlogRepo;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepo extends JpaRepository<Blog,Integer> {

}
