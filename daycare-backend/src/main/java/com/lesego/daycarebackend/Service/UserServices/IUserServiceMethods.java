package com.lesego.daycarebackend.Service.UserServices;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.dto.UserInformation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IUserServiceMethods {
    public String addUser (MultipartFile image, String userJson);

    public List<UserInformation> getAllUsers();

    public ResponseEntity<String> deleteUser(int id);
}
