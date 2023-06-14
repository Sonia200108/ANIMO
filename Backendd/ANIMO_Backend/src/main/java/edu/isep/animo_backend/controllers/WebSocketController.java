package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.services.WebSocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WebSocketController {

    private final WebSocketService webSocketService;

    @Autowired
    public WebSocketController(WebSocketService webSocketService) {
        this.webSocketService = webSocketService;
    }

    @PostMapping("/connect")
    public ResponseEntity<String> establishConnection(){
        this.webSocketService.establishConnection();
        return ResponseEntity.ok("Connection established");

    }
}
