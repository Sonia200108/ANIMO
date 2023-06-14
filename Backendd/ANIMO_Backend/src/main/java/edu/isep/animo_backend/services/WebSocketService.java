package edu.isep.animo_backend.services;

import edu.isep.animo_backend.configurations.WebSocketConfig;
import edu.isep.animo_backend.models.MyWebSocketClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

@Service
public class WebSocketService {

    private final MyWebSocketClient webSocketClient;

    @Autowired
    public WebSocketService(MyWebSocketClient webSocketClient) {
        this.webSocketClient = webSocketClient;
    }

    public void establishConnection() {
        this.webSocketClient.connect();
    }
}
