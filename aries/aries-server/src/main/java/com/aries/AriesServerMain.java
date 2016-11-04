package com.aries;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AriesServerMain {
	public static void main(String[] args) {
		SpringApplication.run(AriesServerMain.class, args);
	}
}