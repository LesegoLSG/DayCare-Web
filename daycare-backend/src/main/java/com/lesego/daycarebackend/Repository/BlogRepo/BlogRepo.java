package com.lesego.daycarebackend.Repository.BlogRepo;

import com.lesego.daycarebackend.Entity.Blog.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
/**
 * Repository interface for Blog entities.
 * Provides methods for performing CRUD operations on Blog entities in the database.
 * Includes custom queries for fetching blogs with their associated users.
 *
 * @author Mhlongo Lesego
 */
@Repository
public interface BlogRepo extends JpaRepository<Blog,Integer> {
    /**
     * Fetch all blogs with their associated users eagerly loaded.
     *
     * @return a list of blogs with their associated users
     */

    @Query("SELECT b FROM Blog b JOIN FETCH b.user")
    List<Blog> findAllWithUsers();

    /**
     * Fetch a single blog by its ID with the associated user eagerly loaded.
     *
     * @param id the ID of the blog
     * @return an Optional containing the found blog with its associated user, or empty if no blog found
     */
    @Query("SELECT b FROM Blog b JOIN FETCH b.user WHERE b.id = :id")
    Optional<Blog> findByIdWithUser(@Param("id") int id);

    /**
     * Count the number of blogs by a specific user's ID.
     *
     * @param userId the ID of the user
     * @return the number of blogs created by the user with the specified ID
     */
    long countByUserId(int userId);
}
