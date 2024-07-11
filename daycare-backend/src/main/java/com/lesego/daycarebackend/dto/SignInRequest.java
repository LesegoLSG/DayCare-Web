package com.lesego.daycarebackend.dto;
/**
 * Data transfer object (DTO) representing a sign-in request.
 * @author Mhlongo Lesego
 */
public class SignInRequest {

    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
