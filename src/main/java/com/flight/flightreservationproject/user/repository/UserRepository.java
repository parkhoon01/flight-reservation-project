package com.flight.flightreservationproject.user.repository;

import com.flight.flightreservationproject.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    // 아이디 중복 여부 확인 (존재하면 true, 없으면 false 반환)
    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.id = :id")
    boolean existsById(@Param("id") String id);

    // 이메일 중복 여부 확인 (존재하면 true, 없으면 false 반환)
    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.email = :email")
    boolean existsByEmail(@Param("email") String email);

    Optional<User> findById(String id);
    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameAndPhoneNumber(String username, String phoneNumber);
    Optional<User> findByUsernameAndEmail(String username, String email);
}
