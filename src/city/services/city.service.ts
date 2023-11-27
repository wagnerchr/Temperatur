// CityService.ts
import { Injectable } from "@nestjs/common";
import { City } from "../models/city.model";
import { CreateCityDto } from "../dtos/create-city.dto";
import { UpdateCityDto } from "../dtos/update-city.dto";
import { CityRepository } from "../repositories/city.repository";
import { getCityData } from "src/utils/weather.utils.";


@Injectable()
export class CityService {
    constructor(
        private cityRepository: CityRepository,
    ) {}

    async getAllCities(): Promise<City[]> {
        return this.cityRepository.getAllCities();
    }

    async getCity(id: number): Promise<City | null> {
        return this.cityRepository.getCityById(id);
    }

    async createCity(createCityDto: CreateCityDto): Promise<City> {
        const cityData = await getCityData(createCityDto.name);

        console.log(cityData)

        const newCityData = {
            ...createCityDto,
            temperature: cityData.current.temperature,
            wind_speed: cityData.current.wind_speed,
            pressure: cityData.current.pressure,
            uv_index: cityData.current.uv_index,
            humidity: cityData.current.humidity,
            feelslike: cityData.current.feelslike,
            visibility: cityData.current.visibility
        };

        return this.cityRepository.createCity(newCityData);
    }

    async updateCity(id: number, data: UpdateCityDto): Promise<City> {
        return this.cityRepository.updateCity(id, data);
    }

    async deleteCity(id: number): Promise<City> {
        return this.cityRepository.deleteCity(id);
    }

    async updateTemperature(id: number): Promise<City> {
        const city = await this.cityRepository.getCityById(id);
        if (!city) {
            throw new Error('Cidade não encontrada');
        }
    
        try {
            const cityWeather = await getCityData(city.name);
            const updatedCity = await this.cityRepository.updateTemperature(id, cityWeather);
            return updatedCity;
        } catch (error) {
            console.error('Erro ao obter a temperatura da cidade:', error);
            throw new Error('Não foi possível obter a temperatura da cidade');
        }
    }
}