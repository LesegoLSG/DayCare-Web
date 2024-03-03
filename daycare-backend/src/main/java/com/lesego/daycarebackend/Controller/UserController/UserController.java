package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Service.UserService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> addNewUser(@RequestBody User user){
        User newUser = userService.addUser(user).getBody();
        return ResponseEntity.ok(newUser);
    }
}
