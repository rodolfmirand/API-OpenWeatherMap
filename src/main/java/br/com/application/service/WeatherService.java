package br.com.application.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;
    private final String apiKey;
    private final String apiUrl;

    private final ObjectMapper objMapper = new ObjectMapper();


    public WeatherService (RestTemplate restTemplate,
                           @Value("${openweathermap.api.key}") String apiKey,
                           @Value("${openweathermap.api.url}") String apiUrl) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }

    public String getWeather (String city) {
        String url = String.format("%s?q=%s&appid=%s&units=metric", apiUrl, city, apiKey);
        return restTemplate.getForObject(url, String.class);
    }

    public double getTemp(String response) throws IOException {
        JsonNode rootNode = objMapper.readTree(response);
        JsonNode mainNode = rootNode.path("main");
        return mainNode.path("temp").asDouble();
    }
    
}
