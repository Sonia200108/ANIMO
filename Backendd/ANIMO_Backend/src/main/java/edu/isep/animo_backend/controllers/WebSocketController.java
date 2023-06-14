package edu.isep.animo_backend.controllers;

import edu.isep.animo_backend.services.WebSocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/send-message")
    public void sendMessage(@RequestBody String message) {
        System.out.println("Message received: " + message);
        webSocketService.sendMessageToServer(message);
    }

}