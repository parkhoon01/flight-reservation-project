package com.flight.flightreservationproject.user.signup.service;

import com.flight.flightreservationproject.user.ResponseDTO;
import com.flight.flightreservationproject.user.signup.dto.SignupRequestDTO;

public interface SignupService {

    ResponseDTO checkEmail(String email);
    ResponseDTO checkId(String id);
    ResponseDTO checkPassword(String password);
    ResponseDTO registerUser(SignupRequestDTO signupRequestDTO);
}
