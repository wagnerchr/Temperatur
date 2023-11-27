export class City {
    id: number;
    name: string;
    description?: string;
    temperature?: number;
    wind_speed?: number;
    pressure?: number;
    uv_index?: number;
    humidity?: number;
    feelslike?: number;
    visibility?: number;

    constructor(id: number, name: string, description?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}