import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric', // 온도를 섭씨(°C)로 받기 위한 설정
      lang: 'kr',      // 날씨 설명을 한국어로 받기 위한 설정
    },
  });
  return response.data;
};