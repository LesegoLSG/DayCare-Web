package com.lesego.daycarebackend.Service.UserService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Reusables.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class UserServiceMethods implements IUserServiceMethods {
    @Autowired
    private UserRepository userRepository;

    @Override
    public String addUser(MultipartFile image, String userJson) {
        //Parse the Json String to a User object
        ObjectMapper objectMapper = new ObjectMapper();
        User user;
        try {
            user = objectMapper.readValue(userJson, User.class);
            System.out.println("user:" + user);
        } catch (JsonProcessingException e) {
            // Handle JSON parsing exception
            throw new IllegalArgumentException("Invalid user JSON format");
        }

        // Set the image data from the multipart file
        try {
            user.setImage(ImageUtils.compressImage(image.getBytes()));
        } catch (IOException e) {
            // Handle file processing exception
            throw new IllegalArgumentException("Error processing image file");
        }



        // Save the user to the database
        userRepository.save(user);
        return "User added successfully:"+ user.getFirstName();
    }
}
