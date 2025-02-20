package com.flight.flightreservationproject.user.service;

// UserController와 통신해서 UserRepository로 전달
public interface UserService {

    String join(String id, String password);

}
