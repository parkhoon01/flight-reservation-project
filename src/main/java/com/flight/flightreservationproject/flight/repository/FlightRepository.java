package com.flight.flightreservationproject.flight.repository;

import com.flight.flightreservationproject.flight.repository.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
}
