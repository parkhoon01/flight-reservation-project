package com.flight.flightreservationproject.user.service;

import com.flight.flightreservationproject.user.controller.dto.JoinRequest;

// UserController와 통신해서 UserRepository로 전달
public interface UserService {

    String join(JoinRequest joinRequest);

}
