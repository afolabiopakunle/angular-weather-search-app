import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=4e347e03292656d25835188d54d837b9&query=" +
        location
    );
  }
}
