package com.example.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.RegisterRequest;
import com.example.backend.dto.response.RegisterResponse;
import com.example.backend.dto.response.UserDetailResponse;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import com.example.backend.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(MyConstant.USER)
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> signUpUser(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();

        try {
            response = userService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.USER_GET)
    public ResponseEntity<?> getUser(@RequestParam String email) {
        System.out.println("userrrrrrrrrr");
        UserDetailResponse response = new UserDetailResponse();
        try {
            response = userService.getUser(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.USER_ALL_GET)
    public List<User> getAllUser() {
        try {
            return userService.getAllUser();
        } catch (Exception e) {
            return null;
        }
    }
}
