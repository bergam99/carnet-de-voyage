import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  private temperature = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris';
  private weather = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris?include=current';

  private params = {
    unitGroup: 'metric',
    key: 'X3EQEQMTPX9L2MUHNPYUQKTBY'
  };

  constructor(private http: HttpClient) { }

  getCurrentTemperature(): Observable<any> {
    return this.http.get(this.temperature, { params: this.params });
  }
  getCurrentWeather(): Observable<any> {
    return this.http.get(this.weather, { params: this.params });
  }
}
