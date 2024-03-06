package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Service.UserServices.IUserServiceMethods;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    @GetMapping()
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi User");
    }

    @Autowired
    private IUserServiceMethods userService;

    @PostMapping("/add")
    public ResponseEntity<String> addNewUser(@RequestParam("image")MultipartFile image,@RequestParam("user") String userJson){
       userService.addUser(image,userJson);
       return ResponseEntity.ok("User added successfully.");
    }

    @GetMapping("/getData")
    public String getData(){
        return "It works";
    }
}
