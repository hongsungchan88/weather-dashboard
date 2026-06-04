import { Link } from 'react-router-dom';
import { useWeatherStore } from '../../store/useWeatherStore';

export default function Header() {
    // Zustand 스토어에서 상태와 액션 가져오기
    const { isCelsius, toggleUnit } = useWeatherStore();

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid #ccc'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '20px', fontWeight: 'bold' }}>
                🌤️ Weather App
            </Link>

            <button
                onClick={toggleUnit}
                style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                {isCelsius ? '섭씨 (°C) 사용 중' : '화씨 (°F) 사용 중'}
            </button>
        </header>
    );
}