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
import java.util.Map;
import java.util.Optional;
/**
 * Service class for managing user-related operations.
 * This class provides methods for adding, updating, deleting, and retrieving users,
 * as well as managing user roles and passwords.
 *
 * @author Mhlongo Lesego
 */
@Service
public class UserServiceMethods implements IUserServiceMethods {
    @Autowired
    private UserRepository userRepository;

    /**
     * Add a new user.
     *
     * @param image Multipart file containing the user's profile image
     * @param userJson JSON string representing the user data
     * @return a success message indicating the user was added
     */
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
            if(image != null && !image.isEmpty()){
                user.setImage(ImageUtils.compressImage(image.getBytes()));
            }
        } catch (IOException e) {
            // Handle file processing exception
            throw new IllegalArgumentException("Error processing image file");
        }
        // Save the user to the database
        userRepository.save(user);
        return "User added successfully:" + user.getFirstName();
    }
    /**
     * Update an existing user.
     *
     * @param id the ID of the user to update
     * @param image Multipart file containing the new profile image
     * @param userJson JSON string representing the new user data
     * @return a ResponseEntity indicating the result of the update operation
     */
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
//                existingUser.setPassword(new BCryptPasswordEncoder().encode(userToUpdate.getPassword()));
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
    /**
     * Delete a user by ID.
     *
     * @param id the ID of the user to delete
     * @return a ResponseEntity indicating the result of the delete operation
     */
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
     * Get the role of a user by their email.
     *
     * @param email the email of the user
     * @return the role of the user
     */
    @Override
    public String getRoleFromUserEmail(String email) {
        System.out.println("Service email:" + email);
        User user = userRepository.findByEmail(email).orElseThrow();
        return user.getRole().name();
    }
    /**
     * Get user information by ID.
     *
     * @param id the ID of the user
     * @return a UserInformation object containing the user's details
     */
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
    /**
     * Update the password of a user.
     *
     * @param id the ID of the user
     * @param passwordJson JSON string containing the new password
     * @return a ResponseEntity indicating the result of the update operation
     */
    @Override
    public ResponseEntity<String> updateUserPassword(int id, String passwordJson) {
        Optional<User> optionalUser = userRepository.findById(id);
        System.out.print("OptionalUser" + optionalUser.get().getPassword());
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                Map<String, String> passwordMap = objectMapper.readValue(passwordJson, Map.class);
                String newPassword = passwordMap.get("password");
                System.out.println("Password" + newPassword);
                existingUser.setPassword(new BCryptPasswordEncoder().encode(newPassword));
                System.out.println("Encrypted password:" + existingUser.getPassword());
                userRepository.save(existingUser);
                return ResponseEntity.ok("Password updated successfully");
            } catch (IOException e) {
                return ResponseEntity.badRequest().body("Invalid JSON format");
            }
        }
        return ResponseEntity.notFound().build();
    }



    /**
     * Get a list of all users.
     *
     * @return a list of UserInformation objects representing all users
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
