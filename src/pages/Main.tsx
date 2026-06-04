import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weather';
import SearchBar from '../components/SearchBar/SearchBar';
import { useWeatherStore } from '../store/useWeatherStore';
import RecentCityList from '../components/RecentSearches/RecentCityList';
import { Link } from 'react-router-dom';

export default function Main() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>('Seoul');

  const { isCelsius, addRecentCity } = useWeatherStore();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getWeatherByCity(city);
        setWeather(data);

        addRecentCity(data.name);
      } catch (err) {
        setError('날씨 데이터를 불러오는데 실패했습니다. 올바른 도시 이름인지 확인해 주세요.');
        setWeather(null);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city, addRecentCity]);

  const displayTemp = weather
    ? (isCelsius ? weather.main.temp : (weather.main.temp * 9) / 5 + 32).toFixed(1)
    : null;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🌍 날씨 대시보드</h1>

      <SearchBar onSearch={(searchCity) => setCity(searchCity)} />

      <RecentCityList onCityClick={(clickedCity) => setCity(clickedCity)} />

      {loading && <h2>데이터를 불러오는 중... ⏳</h2>}
      {error && <h2 style={{ color: 'red' }}>{error} 🚨</h2>}

      {!loading && !error && weather && (
        <Link to={`/weather/${weather.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            maxWidth: '400px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            cursor: 'pointer', // 마우스 포인터 변경
            transition: 'transform 0.2s' // 부드러운 애니메이션
          }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h2>{weather.name}의 현재 날씨</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
              🌡️ 기온: {displayTemp} {isCelsius ? '°C' : '°F'}
            </p>
            <p>💧 습도: {weather.main.humidity}%</p>
            <p>☁️ 상태: {weather.weather[0].description}</p>

            {/* 클릭 유도 메시지 추가 */}
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#007bff', fontWeight: 'bold' }}>
              👉 카드를 클릭하여 상세 정보 보기
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}