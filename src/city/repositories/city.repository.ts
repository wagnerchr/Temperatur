// CityRepository.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { City } from "../models/city.model";
import { CreateCityDto } from "../dtos/create-city.dto";
import { UpdateCityDto } from "../dtos/update-city.dto";

@Injectable()
export class CityRepository {
    constructor(
        private prisma: PrismaService,
    ) {}

    async getAllCities(): Promise<City[]> {
        return this.prisma.city.findMany();
    }

    async getCityById(id: number): Promise<City | null> {
        return this.prisma.city.findUnique({ where: { id: Number(id) } });
    }

    async createCity(createCityDto: CreateCityDto): Promise<City> {
        const {
            name,
            description,
            temperature,
            wind_speed,
            pressure,
            uv_index,
            humidity,
            feelslike,
            visibility,
        } = createCityDto;
        return this.prisma.city.create({
            data: {
                name,
                description,
                temperature,
                wind_speed,
                pressure,
                uv_index,
                humidity,
                feelslike,
                visibility,
            },
        });
    }

    async updateCity(id: number, data: UpdateCityDto): Promise<City> {
        return this.prisma.city.update({
            where: { id: Number(id) },
            data: {
                name: data.name,
                description: data.description
            }
        });
    }

    async deleteCity(id: number): Promise<City> {
        return this.prisma.city.delete({
            where: { id: Number(id) }
        });
    }

    async updateTemperature(id: number, cityData: any): Promise<City> {
        return await this.prisma.city.update({ 
            where: { id: Number(id)},
            data: {
                temperature: cityData.current.temperature,
            }
     });
    }
}
