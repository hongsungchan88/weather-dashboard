// src/api/weather.ts
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// 💡 한글 검색어를 영어로 바꿔주는 맵핑 사전 추가
const cityMapping: { [key: string]: string } = {
  '서울': 'Seoul',
  '부산': 'Busan',
  '제주': 'Jeju',
  '인천': 'Incheon',
  '대구': 'Daegu',
  '대전': 'Daejeon',
  '광주': 'Gwangju',
  '도쿄': 'Tokyo',
  '런던': 'London',
  '파리': 'Paris',
  '뉴욕': 'New York'
};

export const getWeatherByCity = async (city: string) => {
  // 사용자가 입력한 도시가 맵핑 사전에 있으면 영어로 변환, 없으면 그대로 사용
  const mappedCity = cityMapping[city] || city;

  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: mappedCity, // 변환된 영문 도시 이름으로 요청
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  });
  return response.data;
};