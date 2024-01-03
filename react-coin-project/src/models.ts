export interface ICoin {
  id: number;
  name: string;
  symbol: string;
  currentPrice: number;
  high24HourPrice: number;
  low24HourPrice: number;
  image: string;
}

export interface ICoinDetails {
  id: string;
  name: string;
  symbol: string;
  hashing_algorithm: string;
  description: object;
  marketCapInEuro: number;
  homepage: string;
  genesis_date: string;
}
