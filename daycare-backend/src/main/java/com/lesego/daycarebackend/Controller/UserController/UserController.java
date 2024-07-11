package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Service.UserServices.IUserServiceMethods;
import com.lesego.daycarebackend.dto.UserInformation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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

    //Adding a user
    @PostMapping("/add")
    public ResponseEntity<String> addNewUser(@RequestParam(value = "image", required = false) MultipartFile image, @RequestParam("user") String userJson){
        userService.addUser(image,userJson);
        return ResponseEntity.ok("User added successfully.");
    }

    @GetMapping("/getData")
    public String getData(){
        return "It works";
    }

    //Get a list of users
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserInformation>> getUsers(){
        List<UserInformation> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Delete a user through their id
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        return userService.deleteUser(id);
    }

    //Retrieve a user through their id
    @GetMapping("/getUserById/{id}")
    public UserInformation getUserBYId(@PathVariable int id){
        System.out.println("getUserById id:" + id);
        return userService.getUserById(id);
    }

    //Update a user using an id
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id,@RequestParam(value = "image", required = false) MultipartFile image, @RequestParam("user") String userJson){
        return userService.updateUser(id,image,userJson);
    }

    //Getting the role of the user though their email
    @GetMapping("/getRoleFromEmail/{email}")
    public String getUserRoleFromEmail(@PathVariable String email) {
        String role = userService.getRoleFromUserEmail(email);
        System.out.println("Role: " + role);
        if (!role.isEmpty()) {
            return role;
        } else {
            return "Error return user";
        }
    }
}
