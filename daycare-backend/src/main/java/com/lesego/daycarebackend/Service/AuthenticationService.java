package com.lesego.daycarebackend.Service;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.dto.JwtAuthenticationResponse;
import com.lesego.daycarebackend.dto.RefreshTokenRequest;
import com.lesego.daycarebackend.dto.SignInRequest;
import com.lesego.daycarebackend.dto.SignUpRequest;

public interface AuthenticationService {

    public User signup(SignUpRequest signUpRequest);

    public JwtAuthenticationResponse signin(SignInRequest signinRequest);

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
