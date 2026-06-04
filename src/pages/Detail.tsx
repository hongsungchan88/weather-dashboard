import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getWeatherByCity } from '../api/weather';
import { useWeatherStore } from '../store/useWeatherStore';

export default function Detail() {
  // 1. URL에서 :cityName 파라미터 추출
  const { cityName } = useParams<{ cityName: string }>();

  // 2. 페이지 이동을 위한 Hook
  const navigate = useNavigate();

  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 3. 전역 상태에서 온도 단위 가져오기
  const { isCelsius } = useWeatherStore();

  useEffect(() => {
    const fetchDetailWeather = async () => {
      if (!cityName) return;
      try {
        setLoading(true);
        const data = await getWeatherByCity(cityName);
        setWeather(data);
      } catch (err) {
        console.error(err);
        // 에러 발생 시 잘못된 접근이므로 NotFound 페이지로 강제 이동
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    fetchDetailWeather();
  }, [cityName, navigate]);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>상세 데이터를 불러오는 중... ⏳</h2>;
  if (!weather) return null;

  // 온도 변환 로직 (기온 및 체감온도)
  const displayTemp = isCelsius ? weather.main.temp : (weather.main.temp * 9) / 5 + 32;
  const displayFeelsLike = isCelsius ? weather.main.feels_like : (weather.main.feels_like * 9) / 5 + 32;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={() => navigate(-1)} // 이전 페이지로 돌아가기
        style={{ padding: '8px 16px', marginBottom: '20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: 'white' }}
      >
        ⬅️ 메인으로 돌아가기
      </button>

      <h1>{weather.name} 상세 날씨 정보 🔍</h1>

      <div style={{
        margin: '20px auto',
        padding: '30px',
        border: '2px solid #007bff',
        borderRadius: '12px',
        maxWidth: '500px',
        backgroundColor: '#f9fcfb'
      }}>
        <h2 style={{ fontSize: '28px' }}>🌡️ 기온: {displayTemp.toFixed(1)} {isCelsius ? '°C' : '°F'}</h2>
        <p style={{ fontSize: '18px', color: '#555' }}>
          😅 체감 온도: {displayFeelsLike.toFixed(1)} {isCelsius ? '°C' : '°F'}
        </p>
        <hr style={{ border: '0.5px solid #ddd', margin: '20px 0' }} />
        <p>💧 습도: {weather.main.humidity}%</p>
        <p>🌬️ 풍속: {weather.wind.speed} m/s</p>
        <p>☁️ 날씨 상태: <strong>{weather.weather[0].description}</strong></p>
      </div>
    </div>
  );
}