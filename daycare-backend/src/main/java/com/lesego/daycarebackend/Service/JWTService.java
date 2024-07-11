package com.lesego.daycarebackend.Service;

import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashMap;
import java.util.Map;
/**
 * JWTService interface defines methods for generating, validating, and extracting JWT tokens.
 * @author Mhlongo Lesego
 */
public interface JWTService {
    /**
     * Generates a JWT token based on the provided UserDetails.
     *
     * @param userDetails The UserDetails object containing user information.
     * @return The generated JWT token.
     */
     String generateToken(UserDetails userDetails);

    /**
     * Extracts the username (subject) from the JWT token.
     *
     * @param token The JWT token from which to extract the username.
     * @return The extracted username.
     */
    public String extractUserName(String token);

    /**
     * Checks if a JWT token is valid for the provided UserDetails.
     *
     * @param token       The JWT token to validate.
     * @param userDetails The UserDetails object representing the user.
     * @return true if the token is valid, false otherwise.
     */
    public boolean isTokenValid(String token, UserDetails userDetails);
    /**
     * Generates a refresh token with optional extra claims.
     *
     * @param extraClaims  Additional claims to include in the refresh token.
     * @param userDetails  The UserDetails object containing user information.
     * @return The generated refresh token.
     */
    public String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails);
}
