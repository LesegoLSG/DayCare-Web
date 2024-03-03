package com.lesego.daycarebackend.Service.UserService;

import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<User> addUser(User newUser) {
        User myNewUser = userRepository.save(newUser);
        return ResponseEntity.ok(myNewUser);
    }
}
