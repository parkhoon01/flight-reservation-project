package com.flight.flightreservationproject.user.service;


import com.flight.flightreservationproject.user.controller.dto.JoinRequest;
import com.flight.flightreservationproject.user.repository.UserRepository;
import com.flight.flightreservationproject.user.repository.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public String join(JoinRequest joinRequest) {
        User user = User.builder()
                .id(joinRequest.getId())
                .password(joinRequest.getPassword())
                .build();
        userRepository.save(user);

        return "success";

    }
}
