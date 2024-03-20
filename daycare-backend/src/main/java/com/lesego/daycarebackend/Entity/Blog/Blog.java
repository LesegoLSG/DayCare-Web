package com.lesego.daycarebackend.Entity.Blog;

import com.lesego.daycarebackend.Entity.User.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Lob
    @Column(name="cardImage", columnDefinition = "LONGBLOB",nullable = true)
    private byte[] cardImage;
    private String title;
    private String topic;
    @Lob
    private String content;
    private LocalDate date;
    @ManyToOne
    private User user;
    //Parameterless constructor
    public Blog(){

    }

    public Blog(byte[] cardImage, String title, String topic, String content, LocalDate date,User user) {
        this.cardImage = cardImage;
        this.title = title;
        this.topic = topic;
        this.content = content;
        this.date = date;
        this.user = user;
    }

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
