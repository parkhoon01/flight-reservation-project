package com.flight.flightreservationproject.user.findId.service;

import com.flight.flightreservationproject.user.model.User;
import com.flight.flightreservationproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class FindIdServiceImpl implements FindIdService {

    private final UserRepository userRepository;

    public Optional<String> findIdByPhone(String username, String phoneNumber) {
        return userRepository.findByUsernameAndPhoneNumber(username, phoneNumber)
                .map(User::getId);
    }

    public Optional<String> findIdByEmail(String username, String email) {
        return userRepository.findByUsernameAndEmail(username, email)
                .map(User::getId);
    }

}
