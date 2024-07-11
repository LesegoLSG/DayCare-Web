package com.lesego.daycarebackend.Service;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.dto.*;
/**
 * AuthenticationService interface defines methods related to user authentication and authorization.
 * @author Mhlongo Lesego
 */
public interface AuthenticationService {

    /**
     * Registers a new user based on the provided sign-up request.
     *
     * @param signUpRequest The sign-up request containing user details.
     * @return The newly created user entity.
     */
    public User signup(SignUpRequest signUpRequest);

    /**
     * Authenticates a user based on the provided sign-in request.
     *
     * @param signinRequest The sign-in request containing email and password.
     * @return JWT authentication response containing access token and refresh token.
     */
    public JwtAuthenticationResponse signin(SignInRequest signinRequest);

    /**
     * Refreshes the access token using the provided refresh token.
     *
     * @param refreshTokenRequest The refresh token request containing refresh token.
     * @return JWT authentication response with a new access token.
     */
    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);

    /**
     * Retrieves detailed user information based on the provided email.
     * Note: This method is intended to be moved to either UserService or AdminService.
     *
     * @param email The email of the user.
     * @return User information DTO containing user profile details.
     */
    public UserInformation getLoggedInUserInfo(String email);//to be moved back to users/admin
}
