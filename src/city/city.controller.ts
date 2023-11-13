import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from './city.model';
import { CityService } from './city.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCityDto } from './dtos/create-city.dto';
import { TemperatureService } from '../temperature/temperature.service'; 

@ApiTags("cities")
@Controller('/city')
export class CityController {
    constructor(
        private readonly cityService: CityService,
        private readonly temperatureService: TemperatureService, 
    ){}

    @Get()
    async getAll(): Promise<City[]> {
        return this.cityService.getAllCities()
    }

    @Post()
    async postCity(@Body() createCityDto: CreateCityDto) {
        const temperature = await this.temperatureService.getCityTemperature(createCityDto.name); 
        createCityDto.temperature = temperature.current.temperature;
        return this.cityService.createCity(createCityDto);
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