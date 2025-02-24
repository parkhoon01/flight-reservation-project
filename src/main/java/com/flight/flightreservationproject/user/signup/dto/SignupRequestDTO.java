package com.flight.flightreservationproject.user.signup.dto;

import lombok.Data;

@Data
public class SignupRequestDTO {
    private String username;    // 사용자 이름
    private String id;          // 사용자 ID
    private String password;    // 사용자 비밀번호
    private String email;       // 사용자 이메일
    private String phoneNumber; // 사용자 핸드폰번호
    private String address;     // 사용자 주소
}
