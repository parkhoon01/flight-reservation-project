package com.flight.flightreservationproject.user.repository;

import com.flight.flightreservationproject.user.repository.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

// UserService를 통해 값을 전달 받음
public interface UserRepository extends JpaRepository<User, Long> {
}
