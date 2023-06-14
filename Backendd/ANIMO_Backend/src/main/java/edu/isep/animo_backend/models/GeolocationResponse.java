package edu.isep.animo_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GeolocationResponse {

    private @Getter @Setter  GeolocationResult[] results;

    // Getters and setters



    // Inner class representing a geolocation result
    public static class GeolocationResult {
        private @Getter @Setter  Geometry geometry;

        // Getters and setters

        public static class Geometry {
            private @Getter @Setter  Location location;

            // Getters and setters

            public static class Location {
                private @Getter @Setter  double lat;
                private @Getter @Setter  double lng;

                // Getters and setters
            }
        }
    }
}