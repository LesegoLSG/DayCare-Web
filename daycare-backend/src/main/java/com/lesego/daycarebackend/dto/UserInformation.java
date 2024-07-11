package com.lesego.daycarebackend.dto;

import com.lesego.daycarebackend.Entity.User.RoleType;

import java.util.List;
/**
 * Data transfer object (DTO) representing user information.
 * @author Mhlongo Lesego
 */
public class UserInformation {
    //Attributes
    private int id;
    private byte[] image;
    private String firstName;
    private String lastName;

    private String mobile;

    private String email;
    private String password;

    private RoleType role;

    private String whatsAppNo;
    private String facebookLink;

    private String instagramLink;

    private String linkedInLink;

    private String twitterLink;

    //Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
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

    public RoleType getRole() {
        return role;
    }

    public void setRole(RoleType role) {
        this.role = role;
    }

    public String getWhatsAppNo() {
        return whatsAppNo;
    }

    public void setWhatsAppNo(String whatsAppNo) {
        this.whatsAppNo = whatsAppNo;
    }

    public String getFacebookLink() {
        return facebookLink;
    }

    public void setFacebookLink(String facebookLink) {
        this.facebookLink = facebookLink;
    }

    public String getInstagramLink() {
        return instagramLink;
    }

    public void setInstagramLink(String instagramLink) {
        this.instagramLink = instagramLink;
    }

    public String getLinkedInLink() {
        return linkedInLink;
    }

    public void setLinkedInLink(String linkedInLink) {
        this.linkedInLink = linkedInLink;
    }

    public String getTwitterLink() {
        return twitterLink;
    }

    public void setTwitterLink(String twitterLink) {
        this.twitterLink = twitterLink;
    }
}
