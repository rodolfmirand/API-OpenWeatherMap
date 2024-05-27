package br.com.application.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.application.service.WeatherService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class WeatherController {

    @Autowired(required = true)
    private WeatherService service;

    @GetMapping("/weather")
    public String getWeather(@RequestParam("city") String city) throws IOException {
        return service.getWeather(city);
    }
}
