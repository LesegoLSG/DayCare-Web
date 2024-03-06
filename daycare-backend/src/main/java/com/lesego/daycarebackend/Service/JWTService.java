package com.lesego.daycarebackend.Service;

import com.lesego.daycarebackend.Entity.User.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashMap;
import java.util.Map;

public interface JWTService {
     String generateToken(UserDetails userDetails);
    public String extractUserName(String token);

    public boolean isTokenValid(String token, UserDetails userDetails);

    public String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails);
}
