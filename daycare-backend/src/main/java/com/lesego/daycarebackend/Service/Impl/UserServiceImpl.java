package com.lesego.daycarebackend.Service.Impl;

import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
/**
 * Implementation of UserService providing user details retrieval.
 * @author Mhlongo Lesego
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private  UserRepository userRepository;
    /**
     * Retrieves the UserDetailsService for Spring Security.
     *
     * @return UserDetailsService implementation that loads UserDetails by username.
     */

    @Override
    public UserDetailsService userDetailsService(){
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRepository.findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }


}
