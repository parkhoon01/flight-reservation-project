package com.flight.flightreservationproject.user.login.service;

import com.flight.flightreservationproject.user.JwtUtil;
import com.flight.flightreservationproject.user.login.LoginResponseDTO;
import com.flight.flightreservationproject.user.login.dto.LoginRequestDTO;
import com.flight.flightreservationproject.user.model.User;
import com.flight.flightreservationproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;


    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO) {
        Optional<User> userOptional = userRepository.findById(loginRequestDTO.getId());

        if(userOptional.isEmpty()){
            return new LoginResponseDTO(false, "아이디 오류입니다.",null);
        }
        User user = userOptional.get();

        if(!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())){
            return new LoginResponseDTO(false, "비밀번호가 올바르지 않습니다.",null);
        }

        String token = jwtUtil.generateToken(user.getUsername());
        return new LoginResponseDTO(true, "로그인 성공",token);
    }
}
