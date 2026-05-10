package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
public class MovieController {
	@GetMapping("/movie")
	public String getMovie(@RequestParam String name) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://www.omdbapi.com/?t=" +name + "&apikey=761de2b4";
		String response = restTemplate.getForObject(url, String.class);
		return response;
		
	}
}
