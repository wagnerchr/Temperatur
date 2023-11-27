import { Module } from '@nestjs/common';
import { CityController } from "./controllers/city.controller";
import { CityService } from "./services/city.service";
import { PrismaService } from "src/prisma.service";
import { CityRepository } from './repositories/city.repository';

@Module({
    controllers: [CityController],
    providers: [CityService, PrismaService, CityRepository],
})

export class CityModule {};