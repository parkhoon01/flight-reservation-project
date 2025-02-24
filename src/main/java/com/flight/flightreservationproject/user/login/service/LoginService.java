package com.flight.flightreservationproject.user.login.service;

import com.flight.flightreservationproject.user.login.dto.LoginRequestDTO;
import com.flight.flightreservationproject.user.login.LoginResponseDTO;

public interface LoginService {
    LoginResponseDTO login(LoginRequestDTO loginRequestDTO);
}
