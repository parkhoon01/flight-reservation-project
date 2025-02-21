package com.flight.flightreservationproject.flight.repository.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Getter
public class Flight {   // db와 밀접하게 연관되어 있음(데이터 영속성과 관련된 작업)

    // 아래 시퀀스 필요(flight_id
    /*
    CREATE SEQUENCE FLIGHT_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;
    */

    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "flight_seq_gen")
    @SequenceGenerator(name = "flight_seq_gen", sequenceName = "FLIGHT_SEQ", allocationSize = 1)
    private int flight_id;              // 항공 고유 식별번호

    private int flight_number;          // 항공편 번호(ex 항공사코드 + 숫자로 사용자에게 보여짐)

    private String departure_date;      // 출발 날짜

    private String arrival_date;        // 도착 날짜

    private String origin_airport;      // 출발지 공항

    private String destination_airport; // 도착지 공항

    private String flight_company_name; // 항공사 명

    private String gate_number;         // 게이트 번호

    private String flight_duration;     // 비행 소요시간

    private int max_seat_capacity;      // 비행기 최대 좌석 수

    private int current_status_id;      // 현재 상태 (status 참조)
}
