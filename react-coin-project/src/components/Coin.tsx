import React, { useEffect, useState } from "react";
import { ICoin } from "../models";
import Fetch from "../fetchDetailsArray";

interface CoinProps {
  coin: ICoin;
}

export function Coin({ coin }: CoinProps) {
  const [details, ifSetDetails] = useState(false);
  const [name, setName] = useState("");

  setName(coin.name);
  return (
    <div className="coin-item">
      <img src={coin.image} alt={coin.name} />
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>
      <p>{coin.currentPrice}</p>
      <button
        className="coin-button"
        onClick={() => ifSetDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>
            Name: <span style={{ fontWeight: "bold" }}>{coin.name}</span>
            <Fetch />
          </p>
        </div>
      )}
    </div>
  );
}
