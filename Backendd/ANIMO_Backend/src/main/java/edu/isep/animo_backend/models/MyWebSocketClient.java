package edu.isep.animo_backend.models;

import edu.isep.animo_backend.configurations.MyWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.WebSocketConnectionManager;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;

@Component
public class MyWebSocketClient {

    private final WebSocketConnectionManager connectionManager;
    private final MyWebSocketHandler webSocketHandler;
    private final String webSocketUrl = "ws://172.20.10.6:3000"; // Replace with your Raspberry Pi's IP address and port

    @Autowired
    public MyWebSocketClient(MyWebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
        this.connectionManager = new WebSocketConnectionManager(webSocketClient(), webSocketHandler, webSocketUrl);
    }

    private WebSocketClient webSocketClient() {
        return new StandardWebSocketClient();
    }

    public void connect() {
        connectionManager.start();
    }

    public void disconnect() {
        connectionManager.stop();
    }
}
