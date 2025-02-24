package com.flight.flightreservationproject.user.findId.controller;

import com.flight.flightreservationproject.user.findId.dto.FindIdDTO;
import com.flight.flightreservationproject.user.findId.service.FindIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/find-id")
@RequiredArgsConstructor
public class FindIdController {

    private final FindIdService findIdService;

    @PostMapping("/phone")
    public ResponseEntity<String> findIdByPhone(@RequestBody FindIdDTO request) {
        return findIdService.findIdByPhone(request.getUsername(), request.getPhoneNumber())
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("일치하는 사용자 정보가 없습니다."));
    }

    @PostMapping("/email")
    public ResponseEntity<String> findIdByEmail(@RequestBody FindIdDTO request) {
        return findIdService.findIdByEmail(request.getUsername(), request.getEmail())
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("일치하는 사용자 정보가 없습니다."));
    }
}
