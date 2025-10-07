export interface NewsArticle {
  headline: string;
  summary: string;
}

export interface WeatherInfo {
  location: string;
  temperature: number;
  condition: string;
  icon: 'SUN' | 'CLOUD' | 'RAIN';
}

export interface DashboardData {
  news: NewsArticle[];
  weather: WeatherInfo;
}

// FIX: Add missing TrafficAlert type definition to resolve error in components/TrafficWidget.tsx
export interface TrafficAlert {
  location: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

// FIX: Add missing Contest type definition to resolve error in components/ContestWidget.tsx
export interface Contest {
  title: string;
  prize: string;
  callToAction: string;
}
