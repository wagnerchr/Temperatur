import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCityDto } from '../dtos/create-city.dto';
import { UpdateCityDto } from '../dtos/update-city.dto';

@ApiTags("cities")
@Controller('/city')
export class CityController {
    constructor(
        private readonly cityService: CityService,
    ){}

    @Get()
    async getAll(): Promise<City[]> {
        return this.cityService.getAllCities()
    }

    @Post()
    async postCity(@Body() createCityDto: CreateCityDto) {
        return this.cityService.createCity(createCityDto);
    }

    @Get(':id')
    async getCity(@Param('id') id:number): Promise<City | null> {
        return this.cityService.getCity(id);
    }

    @Put(':id')
    async updateCity(@Param('id') id:number, @Body() updateCityDto: UpdateCityDto): Promise<City> {
        return this.cityService.updateCity(id, updateCityDto);
    }

    @Delete(':id')
    async deleteCity(@Param('id') id:number): Promise<City> {
        return this.cityService.deleteCity(id)
    }

    // Update City Temperature
    @Put(':id/temperature')
    async updateTemperature(@Param('id') id:number): Promise<City> {
        return this.cityService.updateTemperature(id);
    }
}