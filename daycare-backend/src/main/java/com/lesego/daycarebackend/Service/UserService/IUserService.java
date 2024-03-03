package com.lesego.daycarebackend.Service.UserService;

import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    public ResponseEntity<User> addUser (User newUser);
}
