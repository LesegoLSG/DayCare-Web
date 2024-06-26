package com.lesego.daycarebackend.Service.UserServices;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.dto.UserInformation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IUserServiceMethods {
    public String addUser (MultipartFile image, String userJson);

    public ResponseEntity<String> updateUser(int id, MultipartFile image, String userJson);

    public List<UserInformation> getAllUsers();

    public ResponseEntity<String> deleteUser(int id);

    public String getRoleFromUserEmail(String email);

//    public UserInformation getLoggedInUserInfo(String email);
    public UserInformation getUserById(int id);

}
