package com.lesego.daycarebackend.Service.UserService;

import org.springframework.web.multipart.MultipartFile;

public interface IUserServiceMethods {
    public String addUser (MultipartFile image, String userJson);
}
