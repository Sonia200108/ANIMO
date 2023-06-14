package edu.isep.animo_backend.controllers;
import edu.isep.animo_backend.models.GeolocationResponse;
import edu.isep.animo_backend.services.GeoCodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class GeocodingController {

    private final GeoCodingService geocodingService;

    @Autowired
    public GeocodingController(GeoCodingService geocodingService) {
        this.geocodingService = geocodingService;
    }

    @GetMapping("/geocode/{address}")
    public GeolocationResponse geocodeAddress(@PathVariable String address) {
        return geocodingService.geocodeAddress(address);
    }
}