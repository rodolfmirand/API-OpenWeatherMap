package br.com.application.model;

public class Weather {
    private String city;
    private double temperature;
    private String conditions;

    public Weather(String city, double temperature, String conditions) {
        this.city = city;
        this.temperature = temperature;
        this.conditions = conditions;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public String getConditions() {
        return conditions;
    }

    public void setConditions(String conditions) {
        this.conditions = conditions;
    }
}
