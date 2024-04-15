package com.lesego.daycarebackend.Service;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.dto.*;

public interface AuthenticationService {

    public User signup(SignUpRequest signUpRequest);

    public JwtAuthenticationResponse signin(SignInRequest signinRequest);

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);

    public UserInformation getLoggedInUserInfo(String email);//to be moved back to users/admin
}
