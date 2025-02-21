package com.flight.flightreservationproject.flight.service;

import com.flight.flightreservationproject.flight.controller.dto.FlightRequest;
import com.flight.flightreservationproject.flight.repository.entity.Flight;

import java.util.List;

public interface FlightService {

    String createFlight(FlightRequest flightRequest);

    List<Flight> getAllFlights();
}
