import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent {
  location = 'Paris';
  temperature: number | null = null;

  currentTemp: number|null=null;


  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentTemperature().subscribe(data => {
      this.temperature = data.currentConditions.temp;
    });
  }
}
