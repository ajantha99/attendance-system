package com.task.backend.Server.controllers;

import com.task.backend.Server.Entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    private Map<String, String> users = new HashMap<>();

    public UserController() {
        // In a real-world scenario, you would retrieve users from a database
        users.put("Ajanthini", "password");
        users.put("user2", "password2");
    }

    private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private long expirationTimeMillis = 3600000; // 24 hours in milliseconds



    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();

        if (users.containsKey(username) && users.get(username).equals(password)) {
            String token = generateToken(username);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("username",username);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    private String generateToken(String username) {

        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationTimeMillis); // Set expiration time

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(key)
                .compact();
    }
}
