package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Service.UserServices.IUserServiceMethods;
import com.lesego.daycarebackend.dto.UserInformation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
@CrossOrigin
public class AdminController {

    @GetMapping()
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi Admin");
    }

    @Autowired
    private IUserServiceMethods userService;

    @PostMapping("/add")
    public ResponseEntity<String> addNewUser(@RequestParam("image") MultipartFile image, @RequestParam("user") String userJson){
        userService.addUser(image,userJson);
        return ResponseEntity.ok("User added successfully.");
    }

    @GetMapping("/getData")
    public String getData(){
        return "It works";
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserInformation>> getUsers(){
       List<UserInformation> users = userService.getAllUsers();
       return ResponseEntity.ok(users);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        return userService.deleteUser(id);
    }
}
