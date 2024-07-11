package com.lesego.daycarebackend.Entity.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lesego.daycarebackend.Entity.Blog.Blog;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
/**
 * Entity class representing a User in the system.
 * Implements UserDetails for Spring Security integration.
 *
 * @author Mhlongo Lesego
 */
@Entity
@Table(name = "user")
public class User implements UserDetails {
    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Lob
    @Column(name="image", columnDefinition = "LONGBLOB", nullable = true)
    private byte[] image;
    private String firstName;
    private String lastName;

    private String mobile;

    private String email;
    private String password;

    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Blog> blog;

    private RoleType role;

    @Column(nullable = true)
    private String whatsAppNo;
    @Column(nullable = true)
    private String facebookLink;
    @Column(nullable = true)
    private String instagramLink;
    @Column(nullable = true)
    private String linkedInLink;
    @Column(nullable = true)
    private String twitterLink;

    //Parameterless constructor
    public User(){}

    /**
     * Parameterised constructor for creating a User instance.
     *
     * @param firstName User's first name
     * @param lastName User's last name
     * @param email User's email
     * @param password User's password
     * @param image User's profile image
     * @param mobile User's mobile number
     * @param role User's role
     * @param blog List of blogs associated with the user
     * @param whatsAppNo User's WhatsApp number
     * @param facebookLink User's Facebook link
     * @param instagramLink User's Instagram link
     * @param linkedInLink User's LinkedIn link
     * @param twitterLink User's Twitter link
     */
    public User(String firstName, String lastName, String email, String password, byte[] image, String mobile,RoleType role, List<Blog> blog,String whatsAppNo,String facebookLink,String instagramLink, String linkedInLink,String twitterLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.image= image;
        this.mobile = mobile;
        this.blog = blog;
        this.role = role;
        this.whatsAppNo = whatsAppNo;
        this.facebookLink=facebookLink;
        this.instagramLink = instagramLink;
        this.linkedInLink = linkedInLink;
        this.twitterLink = twitterLink;
    }

    //Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Returns the authorities granted to the user.
     *
     * @return a collection of GrantedAuthority
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
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

    public List<Blog> getBlog() {
        return blog;
    }

    public void setBlog(List<Blog> blog) {
        this.blog = blog;
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
