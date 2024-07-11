package com.lesego.daycarebackend.Service.Impl;


import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Reusables.ImageUtils;
import com.lesego.daycarebackend.Service.AuthenticationService;
import com.lesego.daycarebackend.Service.JWTService;
import com.lesego.daycarebackend.dto.*;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;
/**
 * Implementation of AuthenticationService providing user authentication and related operations.
 * author Mhlongo Lesego
 */
@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    /**
     * Registers a new user based on the provided sign-up request.
     *
     * @param signUpRequest The sign-up request containing user details.
     * @return The newly created user entity.
     */
    public User signup(SignUpRequest signUpRequest) {
        User user = new User();

        user.setFirstName(signUpRequest.getFirstName());
        user.setLastName(signUpRequest.getLastName());
        user.setEmail(signUpRequest.getEmail());
        user.setRole(signUpRequest.getRole());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return userRepository.save(user);
    }
    /**
     * Authenticates a user based on the provided sign-in request.
     *
     * @param signinRequest The sign-in request containing email and password.
     * @return JWT authentication response containing access token and refresh token.
     * @throws IllegalArgumentException if the email or password is invalid.
     */
    public JwtAuthenticationResponse signin(SignInRequest signinRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(),
                signinRequest.getPassword()));

        var user = userRepository.findByEmail(signinRequest.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email address or password"));
        System.out.println("User Name: " + user.getFirstName() + " " + user.getLastName());
        System.out.println("User:" + user);


        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(),user);

        System.out.println("Token:" + jwt);
        System.out.println("RefreshToken:" + refreshToken);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);

        return jwtAuthenticationResponse;
    }

    /**
     * Refreshes the access token using the provided refresh token.
     *
     * @param refreshTokenRequest The refresh token request containing refresh token.
     * @return JWT authentication response with a new access token.
     */
    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        String userEmail = jwtService.extractUserName(refreshTokenRequest.getRefreshToken());
        User user = userRepository.findByEmail(userEmail).orElseThrow();

        if (jwtService.isTokenValid(refreshTokenRequest.getRefreshToken(), user)) {
            var jwt = jwtService.generateToken(user);

            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(refreshTokenRequest.getRefreshToken());
            return jwtAuthenticationResponse;
        }
        return null;

    }
    /**
     * Retrieves detailed user information based on the provided email.
     *
     * @param email The email of the user.
     * @return User information DTO containing user profile details.
     */
    public UserInformation getLoggedInUserInfo(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        UserInformation userInfo = new UserInformation();
        if(user.isPresent()){
            userInfo.setId(user.get().getId());
            userInfo.setFirstName(user.get().getFirstName());
            userInfo.setLastName(user.get().getLastName());
            userInfo.setEmail(user.get().getEmail());
            userInfo.setPassword(user.get().getPassword());
            userInfo.setMobile(user.get().getMobile());
            userInfo.setRole(user.get().getRole());
            userInfo.setWhatsAppNo(user.get().getWhatsAppNo());
            userInfo.setFacebookLink(user.get().getFacebookLink());
            userInfo.setInstagramLink(user.get().getInstagramLink());
            userInfo.setLinkedInLink(user.get().getLinkedInLink());
            userInfo.setTwitterLink(user.get().getTwitterLink());

            if(user.get().getImage() != null){
                userInfo.setImage(ImageUtils.decompressImage(user.get().getImage()));
            }


            return userInfo;
        }
        return null;
    }
}
