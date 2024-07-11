package com.lesego.daycarebackend.Entity.Blog;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lesego.daycarebackend.Entity.User.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
/**
 * Entity class representing a Blog post.
 * Each Blog is associated with a User who created it.
 * @author Mhlongo Lesego
 */
@Entity
@Table(name = "blog")
public class Blog {
    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Lob
    @Column(name="cardImage", columnDefinition = "LONGBLOB",nullable = true)
    private byte[] cardImage;

    private String category;

    private Status status;

    private String title;
    private String topic;
    @Lob
    @Column(columnDefinition = "LONGBLOB",nullable = true)
    private String content;
    private LocalDate date;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    //Parameterless constructor
    public Blog(){

    }

    /**
     * Parameterized constructor for creating a Blog instance.
     *
     * @param cardImage Image associated with the blog post
     * @param title Title of the blog post
     * @param topic Topic of the blog post
     * @param content Content of the blog post
     * @param date Date of the blog post
     * @param category Category of the blog post
     * @param status Status of the blog post
     * @param user User who created the blog post
     */

    public Blog(byte[] cardImage, String title, String topic, String content, LocalDate date,String category,Status status,User user) {
        this.cardImage = cardImage;
        this.title = title;
        this.topic = topic;
        this.content = content;
        this.date = date;
        this.category = category;
        this.status = status;
        this.user = user;
    }
    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getCardImage() {
        return cardImage;
    }

    public void setCardImage(byte[] cardImage) {
        this.cardImage = cardImage;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
