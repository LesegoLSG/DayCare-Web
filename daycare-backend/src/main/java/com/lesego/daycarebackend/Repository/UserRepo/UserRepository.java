package com.lesego.daycarebackend.Repository.UserRepo;

import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
