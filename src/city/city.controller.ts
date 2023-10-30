import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from './city.model';
import { CityService } from './city.service';

@Controller('/city')
export class CityController {
    constructor(private readonly cityService: CityService){}

    @Get()
    async getAll(): Promise<City[]> {
        return this.cityService.getAllCities()
    }

    @Post()
    async postBook(@Body() city: City): Promise<City> {
        return this.cityService.createCity(city);
    }

    @Get(':id')
    async getCity(@Param('id') id:number): Promise<City | null> {
        return this.cityService.getCity(id);
    }

    @Put(':id')
    async updateBook(@Param('id') id:number, @Body() city: City): Promise<City> {
        return this.cityService.updateCity(id, city);
    }

    @Delete('id')
    async deleteCity(@Param('id') id:number): Promise<City> {
        return this.cityService.deleteCity(id)
    }
}