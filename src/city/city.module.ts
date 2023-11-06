import { Module } from '@nestjs/common';
import { CityController } from "./city.controller";
import { CityService } from "./city.service";
import { PrismaService } from "src/prisma.service";
import { TemperatureService } from 'src/temperature/temperature.service';

@Module({
    controllers: [CityController],
    providers: [CityService, PrismaService, TemperatureService]
})

export class CityModule {};