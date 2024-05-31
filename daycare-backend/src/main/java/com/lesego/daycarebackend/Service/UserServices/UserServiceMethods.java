package com.lesego.daycarebackend.Service.UserServices;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lesego.daycarebackend.Entity.User.RoleType;
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
    public ResponseEntity<String> updateUser(int id, MultipartFile image, String userJson) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()){
            User existingUser = optionalUser.get();

            ObjectMapper objectMapper = new ObjectMapper();
            User userToUpdate;
            try{
                userToUpdate = objectMapper.readValue(userJson, User.class);
                existingUser.setFirstName(userToUpdate.getFirstName());
                existingUser.setLastName(userToUpdate.getLastName());
                existingUser.setMobile(userToUpdate.getMobile());
                existingUser.setEmail(userToUpdate.getEmail());
                existingUser.setPassword(userToUpdate.getPassword());
                existingUser.setRole(userToUpdate.getRole());
                existingUser.setWhatsAppNo(userToUpdate.getWhatsAppNo());
                existingUser.setFacebookLink(userToUpdate.getFacebookLink());
                existingUser.setInstagramLink(userToUpdate.getInstagramLink());
                existingUser.setLinkedInLink(userToUpdate.getLinkedInLink());
                existingUser.setTwitterLink(userToUpdate.getTwitterLink());

                // Update image data if provided
                if (image != null && !image.isEmpty()) {
                    try {
                        existingUser.setImage(ImageUtils.compressImage(image.getBytes()));
                    } catch (IOException e) {
                        throw new IllegalArgumentException("Error processing image file");
                    }
                }
            }catch(JsonProcessingException e){
                throw new IllegalArgumentException("Invalid user JSON format");
            }

            userRepository.save(existingUser);
            return ResponseEntity.ok("User " + userToUpdate.getFirstName() + " is updated Successfully");
        }
        return null;
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

    @Override
    public String getRoleFromUserEmail(String email) {
        System.out.println("Service email:" + email);
        User user = userRepository.findByEmail(email).orElseThrow();
        return user.getRole().name();
    }

    @Override
    public UserInformation getUserById(int id) {
        User user = userRepository.findById(id).orElseThrow();
        System.out.println("getUserById:" + user.getFirstName() + " " + user.getLastName());
        UserInformation userInfo = new UserInformation();
        userInfo.setId(user.getId());
        userInfo.setFirstName(user.getFirstName());
        userInfo.setLastName(user.getLastName());
        userInfo.setEmail(user.getEmail());
        userInfo.setPassword(user.getPassword());
        userInfo.setImage(user.getImage());//to be decompressed
        userInfo.setMobile(user.getMobile());
        userInfo.setRole(user.getRole());
        userInfo.setWhatsAppNo(user.getWhatsAppNo());
        userInfo.setFacebookLink(user.getFacebookLink());
        userInfo.setInstagramLink(user.getInstagramLink());
        userInfo.setTwitterLink(user.getTwitterLink());
        userInfo.setLinkedInLink(user.getLinkedInLink());

        return userInfo;


    }

    //   @Override
//    public UserInformation getLoggedInUserInfo(String email) {
//        Optional<User> user = userRepository.findByEmail(email);
//        UserInformation userInfo = new UserInformation();
//        if(user.isPresent()){
//            userInfo.setFirstName(user.get().getFirstName());
//            userInfo.setLastName(user.get().getLastName());
//            userInfo.setEmail(user.get().getEmail());
//            userInfo.setPassword(user.get().getPassword());
//            userInfo.setMobile(user.get().getMobile());
//            userInfo.setRole(user.get().getRole());
//            userInfo.setImage(ImageUtils.decompressImage(user.get().getImage()));
//
//            return userInfo;
//        }
//        return null;
//    }


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
            userInformation.setWhatsAppNo(user.getWhatsAppNo());
            userInformation.setFacebookLink(user.getFacebookLink());
            userInformation.setInstagramLink(user.getInstagramLink());
            userInformation.setLinkedInLink(user.getLinkedInLink());
            userInformation.setTwitterLink(user.getTwitterLink());
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
