package com.example.backend.service;

import java.util.List;

import com.example.backend.model.User;
import com.example.backend.dto.request.RegisterRequest;
import com.example.backend.dto.response.RegisterResponse;
import com.example.backend.dto.response.UserDetailResponse;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    List<User> getAllUser();
}
