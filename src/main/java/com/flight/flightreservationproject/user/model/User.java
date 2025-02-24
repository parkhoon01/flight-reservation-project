package com.flight.flightreservationproject.user.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "USERS") // 오라클 DB 테이블명과 정확히 일치
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_SEQ_GENERATOR") // 자동 증가 ID
    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ID", unique = true, nullable = false, length = 100)
    private String id;

    @Column(name = "USERNAME", length = 100)
    private String username;

    @Column(name = "PASSWORD", nullable = false, length = 100)
    private String password;

    @Column(name = "EMAIL", length = 100)
    private String email;

    @Column(name = "PHONE_NUMBER", length = 100)
    private String phoneNumber;

    @Column(name = "ADDRESS", length = 100)
    private String address;

    @Column(name = "ERR_COUNT")
    private Integer errCount; // 로그인 실패 횟수

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATED_AT", updatable = false)
    private Date createdAt;

    @Column(name = "ACTIVE_STATUS", columnDefinition = "CHAR(1) DEFAULT 'Y'")
    private String activeStatus = "Y";

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LAST_LOGIN_AT")
    private Date lastLoginAt;

    @Column(name = "USER_ROLE", length = 100)
    private String userRole;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "PASSWORD_UPDATE_DATE")
    private Date passwordUpdateDate;

    // 비밀번호 암호화
    public void encryptPassword(BCryptPasswordEncoder encoder) {
        this.password = encoder.encode(this.password);
    }

    @PrePersist // INSERT 시 자동으로 현재 시간 저장
    protected void onCreate() {
        this.createdAt = new Date();
    }
}
