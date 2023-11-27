import axios from 'axios';

const apiKey = process.env.API_KEY;
const baseUrl = 'http://api.weatherstack.com';

// Função apenas para acessar a api e pegar o clima de determinada cidade
export async function getCityData(city: string): Promise<any> {
  const response = await axios.get(`${baseUrl}/current`, {
    params: {
      access_key: apiKey,
      query: city,
    },
  });
  console.log(response.data.current.temperature);
  return response.data;
}
