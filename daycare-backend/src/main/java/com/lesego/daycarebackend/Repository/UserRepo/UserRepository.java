package com.lesego.daycarebackend.Repository.UserRepo;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
/**
 * Repository interface for User entities.
 * Provides methods for performing CRUD operations on User entities in the database.
 *
 * @author Mhlongo Lesego
 */
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {


    /**
     * Find a user by email.
     *
     * @param email the email of the user
     * @return an Optional containing the found user, or empty if no user found
     */
    Optional<User> findByEmail(String email);

    /**
     * Find a user by role.
     *
     * @param role the role of the user
     * @return the user with the specified role
     */
    User findByRole(RoleType role);
    /**
     * Count the number of users by role.
     *
     * @param role the role to count users by
     * @return the number of users with the specified role
     */
    long countByRole(RoleType role);
}
