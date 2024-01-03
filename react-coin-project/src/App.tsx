import React, { useEffect, useState } from "react";
import { Coin } from "./components/Coin";
import "./App.css";
import axios from "axios";
import { ICoin, ICoinDetails } from "./models";

function App() {
  const [coins, setCoins] = useState<ICoin[]>([]);

  async function fetchCoins() {
    const responce = await axios.get<ICoin[]>(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10"
    );
    setCoins(responce.data);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="coin-container">
      {coins.map((coin) => (
        <Coin coin={coin} key={coin.id} />
      ))}
    </div>
  );
}

export default App;
