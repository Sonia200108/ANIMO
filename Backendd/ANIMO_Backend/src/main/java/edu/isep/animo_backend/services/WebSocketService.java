package edu.isep.animo_backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.client.WebSocketConnectionManager;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

@Service
public class WebSocketService {

    private WebSocketConnectionManager connectionManager;
    private WebSocketSession session;

    public WebSocketService() {
        WebSocketClient webSocketClient = new StandardWebSocketClient();
        WebSocketHandler webSocketHandler = new WebSocketHandler();
        connectionManager = new WebSocketConnectionManager(webSocketClient, webSocketHandler, "ws://172.20.10.7:3000");
        connectionManager.start();
    }

    public void sendMessageToServer(String message) {
        if (session != null && session.isOpen()) {
            try {
                session.sendMessage(new TextMessage(message));
            } catch (Exception e) {
                // Handle any exceptions
            }
        }
    }

    private class WebSocketHandler extends AbstractWebSocketHandler {

        @Override
        public void afterConnectionEstablished(WebSocketSession session) throws Exception {
            //check session
            WebSocketService.this.session = session;
            System.out.println("WebSocket session has been established: " + session.getId());

        }

        @Override
        protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
            // Handle incoming messages if needed
        }

        // Override other methods as per your requirement

    }
}

