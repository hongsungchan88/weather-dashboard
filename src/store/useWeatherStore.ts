import { create } from 'zustand';

interface WeatherState {
    isCelsius: boolean;
    recentCities: string[];
    toggleUnit: () => void;
    addRecentCity: (city: string) => void;
}

// 스토어 생성
export const useWeatherStore = create<WeatherState>((set) => ({
    isCelsius: true, // 기본값: 섭씨
    recentCities: [],

    // 온도 단위 토글 액션
    toggleUnit: () => set((state) => ({ isCelsius: !state.isCelsius })),

    // 최근 검색어 추가 액션 (최대 5개 유지, 중복 제거)
    addRecentCity: (city) =>
        set((state) => {
            const filtered = state.recentCities.filter((c) => c !== city);
            return { recentCities: [city, ...filtered].slice(0, 5) };
        }),
}));