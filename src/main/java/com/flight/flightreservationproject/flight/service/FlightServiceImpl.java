package com.flight.flightreservationproject.flight.service;

import com.flight.flightreservationproject.flight.controller.dto.FlightRequest;
import com.flight.flightreservationproject.flight.repository.FlightRepository;
import com.flight.flightreservationproject.flight.repository.entity.Flight;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;

    @Override
    public List<Flight> getAllFlights(){
        return flightRepository.findAll();
    }

    @Override
    public String createFlight(FlightRequest flightRequest) {
        Flight flight = Flight.builder()
                .flight_number(flightRequest.getFlight_number())
                .departure_date(flightRequest.getDeparture_date())
                .arrival_date(flightRequest.getArrival_date())
                .origin_airport(flightRequest.getOrigin_airport())
                .destination_airport(flightRequest.getDestination_airport())
                .flight_company_name(flightRequest.getFlight_company_name())
                .gate_number(flightRequest.getGate_number())
                .flight_duration(flightRequest.getFlight_duration())
                .max_seat_capacity(flightRequest.getMax_seat_capacity())
                .current_status_id(flightRequest.getCurrent_status_id())
                .build();
        flightRepository.save(flight);
        return "success";
    }

}
