package com.flight.flightreservationproject.user.service;


import com.flight.flightreservationproject.user.repository.UserRepository;
import com.flight.flightreservationproject.user.repository.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public String join(String id, String password){
        User user = User.builder()
                .id(id)
                .password(password)
                .build();
        userRepository.save(user);

        return "success";

    }
}
