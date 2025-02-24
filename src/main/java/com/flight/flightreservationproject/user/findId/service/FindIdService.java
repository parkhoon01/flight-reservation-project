package com.flight.flightreservationproject.user.findId.service;

import java.util.Optional;

public interface FindIdService {
    public Optional<String> findIdByPhone(String username, String phoneNumber);
    public Optional<String> findIdByEmail(String username, String email);
}
