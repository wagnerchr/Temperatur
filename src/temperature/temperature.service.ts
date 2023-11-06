import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TemperatureService {
  private readonly apiKey = process.env.API_KEY;
  private readonly baseUrl = 'http://api.weatherstack.com';

  async getCityTemperature(city: string): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/current`, {
      params: {
        access_key: this.apiKey,
        query: city,
      },
    });

    console.log(response.data.current.temperature)
    return response.data;
  }
}