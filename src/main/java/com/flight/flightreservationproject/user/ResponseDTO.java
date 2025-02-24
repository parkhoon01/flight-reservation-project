package com.flight.flightreservationproject.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class ResponseDTO {
    private boolean success;
    private String message;

    // 기본 생성자 추가
    public ResponseDTO() {}

    // 모든 필드를 받는 생성자 추가
    public ResponseDTO(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
