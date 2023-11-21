import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { City } from "./city.model";
import { CreateCityDto } from "./dtos/create-city.dto";
import { UpdateCityDto } from "./dtos/update-city.dto";
import { TemperatureService } from "src/temperature/temperature.service";

@Injectable()
export class CityService {
    constructor(
        private prisma: PrismaService,
        private readonly temperatureService: TemperatureService, 
    ) {}

    async getAllCities(): Promise<City[]>{
        return this.prisma.city.findMany()
    }
     
    async getCity(id: number): Promise<City | null> {
        return this.prisma.city.findUnique({where: {id:Number(id)} })
    }

        async createCity(createCityDto: CreateCityDto): Promise<City> {
            const cityData = await this.temperatureService.getCityData(createCityDto.name);
            
            // Montar City DTO
            const newCity: CreateCityDto = {
                ...createCityDto,
                temperature: cityData.current.temperature,
                wind_speed: cityData.current.wind_speed,
                pressure: cityData.current.pressure,
                uv_index: cityData.current.uv_index,
                humidity: cityData.current.humidity,
                feelslike: cityData.current.feelslike,
                visibility: cityData.current.visibility
            }

            return this.prisma.city.create({
                data: newCity
            })
        }

    async updateCity(id: number, data: UpdateCityDto): Promise<City> {
        return this.prisma.city.update({
            where: {id: Number(id)},
            data: {
                name: data.name,
                description: data.description
            }
        })
    }

    async deleteCity(id: number): Promise<City> {
        return this.prisma.city.delete({
            where: {id: Number(id)}
        })
    }

    async updateTemperature(id: number): Promise<City> {
        const city = await this.prisma.city.findUnique({where: {id:Number(id)} })
        if (!city) 
            throw new Error('Cidade não encontrada');
        try {
            const cityTemperature = await this.temperatureService.getCityData(city.name);
            return this.prisma.city.update({
                where: {id: Number(id)},
                data: {
                    temperature: cityTemperature.current.temperature,
                },
            });
        } catch (error) {
            console.error('Erro ao obter a temperatura da cidade:', error);
            throw new Error('Não foi possível obter a temperatura da cidade');
        }
    }
}