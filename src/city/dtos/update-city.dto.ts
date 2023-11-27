import { ApiProperty } from "@nestjs/swagger";

export class UpdateCityDto {
    @ApiProperty({
        description: 'Nome da cidade',
        example: 'Caraguatatuba'
    })
    name: string;
    
    @ApiProperty({
        description: 'Descrição da Cidade',
        example: 'Cidade da Mãe'
    })
    description: string;
    temperature?: number;
}