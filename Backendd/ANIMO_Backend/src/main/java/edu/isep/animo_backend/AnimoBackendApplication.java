package edu.isep.animo_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AnimoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnimoBackendApplication.class, args);
	}

}
