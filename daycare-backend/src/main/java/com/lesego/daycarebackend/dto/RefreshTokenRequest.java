package com.lesego.daycarebackend.dto;
/**
 * Data transfer object (DTO) representing a request to refresh an authentication token.
 * @author Mhlongo Lesego
 */
public class RefreshTokenRequest {

    private String refreshToken;

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setToken(String token) {
        this.refreshToken = refreshToken;
    }
}
