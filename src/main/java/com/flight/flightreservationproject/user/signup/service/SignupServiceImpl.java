package com.flight.flightreservationproject.user.signup.service;

import com.flight.flightreservationproject.user.ResponseDTO;
import com.flight.flightreservationproject.user.model.User;
import com.flight.flightreservationproject.user.repository.UserRepository;
import com.flight.flightreservationproject.user.signup.dto.SignupRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignupServiceImpl implements SignupService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    // 회원가입시 이메일 중복 체크
    @Override
    public ResponseDTO checkEmail(String email) {
        if(userRepository.existsByEmail(email)){
            return new ResponseDTO((false),"이미 사용중인 이메일입니다.");
        }
        return new ResponseDTO((true),"사용 가능한 이메일입니다.");
    }

    // 회원가입시 아이디 중복 체크
    @Override
    public ResponseDTO checkId(String id) {
        if(userRepository.existsById(id)){
            return new ResponseDTO((false),"이미 사용중인 아이디입니다.");
        }
        return new ResponseDTO((true),"사용 가능한 아이디입니다.");
    }

    // 회원가입시 비밀번호 복잡도 체크
    @Override
    public ResponseDTO checkPassword(String password) {
        if (password.length() < 8) {
            return new ResponseDTO(false, "비밀번호는 최소 8자 이상이어야 합니다.");
        }
        if (!password.matches(".*[A-Z].*")) {
            return new ResponseDTO(false, "비밀번호에는 최소 1개의 대문자가 포함되어야 합니다.");
        }
        if (!password.matches(".*[a-z].*")) {
            return new ResponseDTO(false, "비밀번호에는 최소 1개의 소문자가 포함되어야 합니다.");
        }
        if (!password.matches(".*\\d.*")) {
            return new ResponseDTO(false, "비밀번호에는 최소 1개의 숫자가 포함되어야 합니다.");
        }
        if (!password.matches(".*[@$!%*?&].*")) {
            return new ResponseDTO(false, "비밀번호에는 최소 1개의 특수문자(@$!%*?&)가 포함되어야 합니다.");
        }
        return new ResponseDTO(true, "사용 가능한 비밀번호입니다.");
    }

    @Override
    public ResponseDTO registerUser(SignupRequestDTO signupRequestDTO) {

        ResponseDTO passwordCheck = checkPassword(signupRequestDTO.getPassword());
        // 비밀번호 설정 오류라면
        if(!passwordCheck.isSuccess()){
            return passwordCheck;
        }

        User user = new User();
        user.setUsername(signupRequestDTO.getUsername());
        user.setId(signupRequestDTO.getId());
        user.setPassword(passwordEncoder.encode(signupRequestDTO.getPassword()));
        user.setEmail(signupRequestDTO.getEmail());
        user.setPhoneNumber(signupRequestDTO.getPhoneNumber());
        user.setAddress(signupRequestDTO.getAddress());

        userRepository.save(user);

        return new ResponseDTO(true, "회원가입 성공");

    }
}
