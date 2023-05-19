export interface Condition {
  text: string;
  icon: string;
  condition: string;
}

export interface Location {
  name: string;
  country: string;
  location: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  is_day: 0 | 1;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  pressure_mb: number;
  pressure_in: number;
  humidity: number;
  cloud: number;
}

export interface Weather {
  location: Location;
  current: Current;
}
