# 🌤️ Weather Dashboard

> OpenWeatherMap API를 활용한 도시별 날씨 조회 대시보드

<br>

## 📌 프로젝트 소개

도시명을 입력하면 OpenWeatherMap API를 통해 현재 날씨 정보(기온·습도·풍속·날씨 상태)를 실시간으로 조회하는 웹 애플리케이션입니다.  
React 19와 TypeScript를 기반으로 Zustand 전역 상태 관리, Axios API 연동, gh-pages 배포까지 프론트엔드 개발 전 과정을 직접 구현했습니다.

<br>

## 🛠️ 기술 스택

| 구분 | 기술 |
|---|---|
| Frontend | React 19, TypeScript |
| 번들러 | Vite |
| 상태 관리 | Zustand |
| HTTP 클라이언트 | Axios |
| 라우팅 | React Router DOM v7 |
| 배포 | GitHub Pages (gh-pages) |

<br>

## ✨ 주요 기능

- **날씨 조회** : 도시명 입력 시 OpenWeatherMap API로 현재 날씨 데이터 실시간 조회
- **날씨 정보 표시** : 기온·체감온도·습도·풍속·날씨 상태(맑음·흐림·비 등) 대시보드 표시
- **전역 상태 관리** : Zustand를 활용해 날씨 데이터 및 로딩·에러 상태 중앙 관리
- **페이지 라우팅** : React Router DOM으로 화면 전환 구성
- **타입 안전성** : OpenWeatherMap API 응답 타입 정의로 런타임 오류 방지

<br>

## 📁 프로젝트 구조

```
weather-dashboard/
├── public/
├── src/
│   ├── components/       # 재사용 UI 컴포넌트
│   ├── pages/            # 페이지 단위 컴포넌트
│   ├── store/            # Zustand 전역 상태
│   ├── types/            # TypeScript 타입 정의
│   ├── api/              # Axios API 요청 모듈
│   ├── App.tsx
│   └── main.tsx
├── .env                  # 환경변수 (API Key)
└── vite.config.ts
```

<br>

## ⚙️ 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 OpenWeatherMap API 키를 입력합니다.

```env
VITE_WEATHER_API_KEY=여기에_API_키_입력
```

> OpenWeatherMap API 키는 [https://openweathermap.org/api](https://openweathermap.org/api) 에서 무료로 발급받을 수 있습니다.

<br>

## 🚀 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/hongsungchan88/weather-dashboard.git
cd weather-dashboard

# 2. 패키지 설치
npm install

# 3. 환경변수 설정 (.env 파일 생성 후 API 키 입력)

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

<br>

## 📦 배포

```bash
# GitHub Pages 배포
npm run deploy
```

`gh-pages` 패키지를 통해 `dist` 폴더가 GitHub Pages에 자동 배포됩니다.

<br>

## 📅 개발 기간

2026.06 (개별 프로젝트)
