package com.flight.flightreservationproject.user.signup.controller;

import com.flight.flightreservationproject.user.ResponseDTO;
import com.flight.flightreservationproject.user.signup.dto.SignupRequestDTO;
import com.flight.flightreservationproject.user.signup.service.SignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
//@RequiredArgsConstructor
public class SignupController {

    private final SignupService signupService;

    @Autowired
    public SignupController(SignupService signupService) {
        this.signupService = signupService;
    }

    /**
     * 아이디 중복 체크
     */
    @GetMapping("/check-id")
    public ResponseEntity<ResponseDTO> checkId(@RequestParam String id) {
        ResponseDTO response = signupService.checkId(id);
        return ResponseEntity.ok(response);
    }

    /**
     * 이메일 중복 체크
     */
    @GetMapping("/check-email")
    public ResponseEntity<ResponseDTO> checkEmail(@RequestParam String email) {
        ResponseDTO response = signupService.checkEmail(email);
        return ResponseEntity.ok(response);
    }

    /**
     * 비밀번호 복잡도 체크
     */
//    @PostMapping("/check-password")
//    public ResponseEntity<ResponseDTO> checkPassword(@RequestBody String password) {
//        ResponseDTO response = signupService.checkPassword(password);
//        return ResponseEntity.ok(response);
//    }

    /**
     * 회원가입 처리 (중복 체크는 회원가입 버튼을 누르기 전에 프론트에서 수행)
     */
    @PostMapping
    public ResponseEntity<ResponseDTO> registerUser(@RequestBody SignupRequestDTO request) {
        ResponseDTO response = signupService.registerUser(request);
        return ResponseEntity.ok(response);
    }
}
