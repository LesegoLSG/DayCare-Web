package com.lesego.daycarebackend.dto;

import com.lesego.daycarebackend.Entity.User.RoleType;

import java.util.List;

/**
 * Data transfer object (DTO) representing a sign-up request.
 * @author Mhlongo Lesego
 */
public class SignUpRequest {
    private byte[] image;
    private String firstName;
    private String lastName;

    private String mobile;

    private String email;

    private String password;

    private RoleType role;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

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

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public RoleType getRole() {
        return role;
    }

    public void setRole(RoleType role) {
        this.role = role;
    }
}
