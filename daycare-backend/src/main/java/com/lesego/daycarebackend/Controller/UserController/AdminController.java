package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Entity.User.RoleType;
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
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @GetMapping()
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hi Admin");
    }


//    @GetMapping("/currentlyLoggedInUser/{email}")
//    public UserInformation getCurrentLoggedInUser(@PathVariable String email){
//        return userService.getLoggedInUserInfo(email);
//    }
}
