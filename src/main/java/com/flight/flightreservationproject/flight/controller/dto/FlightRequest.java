package com.flight.flightreservationproject.flight.controller.dto;

import lombok.Data;

@Data   // getter, setter, toString 등을 자동 생성함
public class FlightRequest {

    private int flight_number;

    private String departure_date;

    private String arrival_date;

    private String origin_airport;

    private String destination_airport;

    private String flight_company_name;

    private String gate_number;

    private String flight_duration;

    private int max_seat_capacity;

    private int current_status_id;
}
