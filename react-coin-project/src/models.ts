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
  id: number;
  name: string;
  symbol: string;
  hashing_algorithm: string;
  description: string;
  marketCapInEuro: bigint;
  homepage: string;
  genesis_date: Date;
}
export interface IFotos {
  id: number;
  url: string;
  title: string;
}
