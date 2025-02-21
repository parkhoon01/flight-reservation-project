package com.flight.flightreservationproject.user.controller;

import com.flight.flightreservationproject.user.controller.dto.JoinRequest;
import com.flight.flightreservationproject.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/hello")
    public String getHello(){
        return "hello";
    }

    @PostMapping("/join")
    public String join(@RequestBody JoinRequest joinRequest){

        String result = userService.join(joinRequest);

        if("success".equalsIgnoreCase(result)){
            return "success";
        } else{
            return "fail";
        }
    }
}
