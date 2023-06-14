package edu.isep.animo_backend.services;

import edu.isep.animo_backend.models.GeolocationResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriUtils;

import java.nio.charset.StandardCharsets;

@Service
public class GeoCodingService {

    @Value("${google.api.key}")
    private String googleApiKey;

    public GeolocationResponse geocodeAddress(String address) {
        String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                UriUtils.encode(address, StandardCharsets.UTF_8) +
                "&key=" + googleApiKey;


        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<GeolocationResponse> response = restTemplate.getForEntity(url, GeolocationResponse.class);



        if (response.getStatusCode().is2xxSuccessful()) {
            return response.getBody();
        } else {
            throw new RuntimeException("Geocoding request failed");
        }
    }
}