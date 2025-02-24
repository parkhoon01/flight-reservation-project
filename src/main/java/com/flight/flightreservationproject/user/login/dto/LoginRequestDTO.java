package com.flight.flightreservationproject.user.login.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequestDTO {
    private String id;       // 로그인 ID
    private String password; // 비밀번호
    private String token;    // JWT 토큰

}
