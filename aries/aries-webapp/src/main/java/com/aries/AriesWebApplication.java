package com.aries;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication
public class AriesWebApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(AriesWebApplication.class, args);
	}
}