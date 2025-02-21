package com.flight.flightreservationproject.flight.controller;

import com.flight.flightreservationproject.flight.controller.dto.FlightRequest;
import com.flight.flightreservationproject.flight.repository.entity.Flight;
import com.flight.flightreservationproject.flight.service.FlightService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FlightController {

    private final FlightService flightService;

    @GetMapping("/flight")
    public List<Flight> getAllFlight(){
        return flightService.getAllFlights();
    }

    @PostMapping("/flight/create")
    public String createFlight(@RequestBody FlightRequest flightRequest){

        String result = flightService.createFlight(flightRequest);

        if("success".equalsIgnoreCase(result)){
            return "success";
        } else{
            return "fail";
        }
    }

}
