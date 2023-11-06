import { Module } from '@nestjs/common';
import { CityModule } from './city/city.module';
import { TemperatureService } from './temperature/temperature.service';

@Module({
  imports: [CityModule],
  controllers: [],
  providers: [TemperatureService],
})
export class AppModule {}
