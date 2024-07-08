package com.lesego.daycarebackend.Repository.UserRepo;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    //Find user by email
    Optional<User> findByEmail(String email);
    //Find user by role
    User findByRole(RoleType role);
    //Count users by role
    long countByRole(RoleType role);
}
