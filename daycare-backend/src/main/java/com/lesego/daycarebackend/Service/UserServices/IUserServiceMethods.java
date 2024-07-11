package com.lesego.daycarebackend.Service.UserServices;

import com.lesego.daycarebackend.dto.UserInformation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
/**
 * Interface for user service methods.
 * This interface defines the operations related to user management,
 * such as adding, updating, deleting, and retrieving users, as well as
 * managing user roles and passwords.
 *
 */
public interface IUserServiceMethods {
    /**
     * Add a new user.
     *
     * @param image Multipart file containing the user's profile image
     * @param userJson JSON string representing the user data
     * @return a success message indicating the user was added
     */
    public String addUser (MultipartFile image, String userJson);

    /**
     * Update an existing user.
     *
     * @param id the ID of the user to update
     * @param image Multipart file containing the new profile image
     * @param userJson JSON string representing the new user data
     * @return a ResponseEntity indicating the result of the update operation
     */
    public ResponseEntity<String> updateUser(int id, MultipartFile image, String userJson);
    /**
     * Get a list of all users.
     *
     * @return a list of UserInformation objects representing all users
     */
    public List<UserInformation> getAllUsers();
    /**
     * Delete a user by ID.
     *
     * @param id the ID of the user to delete
     * @return a ResponseEntity indicating the result of the delete operation
     */
    public ResponseEntity<String> deleteUser(int id);
    /**
     * Get the role of a user by their email.
     *
     * @param email the email of the user
     * @return the role of the user
     */
    public String getRoleFromUserEmail(String email);

    /**
     * Get user information by ID.
     *
     * @param id the ID of the user
     * @return a UserInformation object containing the user's details
     */
    public UserInformation getUserById(int id);

    /**
     * Update the password of a user.
     *
     * @param id the ID of the user
     * @param passwordJson JSON string containing the new password
     * @return a ResponseEntity indicating the result of the update operation
     */
    public ResponseEntity<String> updateUserPassword(int id,String passwordJson);

}
