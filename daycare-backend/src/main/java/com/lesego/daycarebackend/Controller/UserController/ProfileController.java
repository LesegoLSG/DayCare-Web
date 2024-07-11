package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Service.UserServices.IUserServiceMethods;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/profile")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    @Autowired
    private IUserServiceMethods userService;

    //Updating a profile
    @PutMapping("/profileUpdate/{id}")
    public ResponseEntity<String> updateProfile(@PathVariable int id, @RequestParam(value = "image", required = false) MultipartFile image, @RequestParam("user") String userJson){
        return userService.updateUser(id,image,userJson);
    }

    //Updating a password
    @PutMapping("/updateUserPassword/{id}")
    public ResponseEntity<String> updateUserPassword(@RequestBody String password,@PathVariable int id){
        return userService.updateUserPassword(id,password);
    }
}
