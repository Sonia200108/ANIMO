package edu.isep.animo_backend.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class Auth0TokenService {
    @Value("${auth0.tokenEndpoint}")
    private String auth0TokenEndpoint;

    @Value("${auth0.clientId}")
    private String clientId;

    @Value("${auth0.clientSecret}")
    private String clientSecret;

    @Value("${auth0.audience}")
    private String audience;

    public String getBearerToken() {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = "{\"client_id\":\"" + clientId + "\",\"client_secret\":\"" + clientSecret + "\",\"audience\":\"" + audience + "\",\"grant_type\":\"client_credentials\"}";

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Auth0TokenResponse> responseEntity = restTemplate.exchange(auth0TokenEndpoint, HttpMethod.POST, requestEntity, Auth0TokenResponse.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            Auth0TokenResponse tokenResponse = responseEntity.getBody();
            return tokenResponse.getAccess_token();
        } else {
            throw new RuntimeException("Failed to retrieve bearer token. Status code: " + responseEntity.getStatusCode());
        }
    }

    private static class Auth0TokenResponse {
        private String access_token;

        public String getAccess_token() {
            return access_token;
        }

        public void setAccess_token(String access_token) {
            this.access_token = access_token;
        }
    }
}