import { useWeatherStore } from '../../store/useWeatherStore';

interface RecentCityListProps {
    onCityClick: (city: string) => void;
}

export default function RecentCityList({ onCityClick }: RecentCityListProps) {
    // Zustand 스토어에서 최근 검색어 배열만 꺼내옵니다.
    const { recentCities } = useWeatherStore();

    // 최근 검색어가 없으면 아무것도 렌더링하지 않습니다.
    if (recentCities.length === 0) return null;

    return (
        <div style={{ margin: '20px 0' }}>
            <h3 style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                🕒 최근 검색한 도시
            </h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {recentCities.map((city, index) => (
                    <button
                        key={index}
                        onClick={() => onCityClick(city)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid #007bff',
                            backgroundColor: 'white',
                            color: '#007bff',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                        }}
                        // 마우스 호버 효과를 위한 간단한 인라인 이벤트
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f8ff')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
}