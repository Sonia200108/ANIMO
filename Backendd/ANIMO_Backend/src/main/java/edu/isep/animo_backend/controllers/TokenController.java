package edu.isep.animo_backend.controllers;
import edu.isep.animo_backend.services.Auth0TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TokenController {
    @Autowired
    private Auth0TokenService tokenService;

    @GetMapping("/token")
    public String getBearerToken() {
        return tokenService.getBearerToken();
    }
}