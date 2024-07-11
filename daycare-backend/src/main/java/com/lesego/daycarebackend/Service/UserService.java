package com.lesego.daycarebackend.Service;

import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * UserService interface defines methods related to user details retrieval.
 * @author Mhlongo Lesego
 */
public interface UserService {
    /**
     * Retrieves a UserDetailsService instance.
     *
     * @return UserDetailsService instance.
     */
    UserDetailsService userDetailsService();
}
