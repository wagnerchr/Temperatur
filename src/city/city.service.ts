import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { City } from "./city.model";
import { CreateCityDto } from "./dtos/create-city.dto";

@Injectable()
export class CityService {
    constructor(private prisma: PrismaService) {}

    async getAllCities(): Promise<City[]>{
        return this.prisma.city.findMany()
    }
     
    async getCity(id: number): Promise<City | null> {
        return this.prisma.city.findUnique({where: {id:Number(id)} })
    }

    async createCity(data: CreateCityDto): Promise<City> {
        return this.prisma.city.create({
            data,
        })
    }

    async updateCity(id: number, data: City): Promise<City> {
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
}