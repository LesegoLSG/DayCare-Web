package com.lesego.daycarebackend.Service.UserServices;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Reusables.ImageUtils;
import com.lesego.daycarebackend.dto.UserInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            System.out.println("user:" + user);
        } catch (JsonProcessingException e) {
            // Handle JSON parsing exception
            throw new IllegalArgumentException("Invalid user JSON format");
        }

        // Set the image data from the multipart file and encode password
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

    @Override
    public ResponseEntity<String> deleteUser(int id) {
        Optional<User> user = userRepository.findById(id);
       if(user.isPresent()){
           userRepository.delete(user.get());
           return ResponseEntity.ok("User with id: " + id + " is deleted successfully");
       }else{
           return ResponseEntity.notFound().build();
       }
    }


    /**
     *
     * @return list of users
     * Method to return all users
     */
    @Override
    public List<UserInformation> getAllUsers() {
        List<User> userList = userRepository.findAll();
        List<UserInformation> userInformationList = new ArrayList<>();

        System.out.println("userList: " + userList);
        for(User user : userList){
            UserInformation userInformation = new UserInformation();
            userInformation.setId(user.getId());
            userInformation.setFirstName(user.getFirstName());
            userInformation.setLastName(user.getLastName());
            userInformation.setEmail(user.getEmail());
            userInformation.setMobile(user.getMobile());
            userInformation.setPassword(user.getPassword());
            userInformation.setRole(user.getRole());
            userInformationList.add(userInformation);

            if(user.getImage() == null){
                userInformation.setImage(null);
            }else{
                userInformation.setImage(ImageUtils.decompressImage(user.getImage()));
            }

        }
        return userInformationList;
    }



}
