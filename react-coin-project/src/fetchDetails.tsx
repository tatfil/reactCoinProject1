import { useState, useEffect } from "react";
import { ICoinDetails } from "./models";
import axios from "axios";

const Fetch = () => {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState();
  const [hashingAlgorithm, setHashAlg] = useState("");

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/bitcoin";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.hashing_algorithm);
        setHashAlg(json.hashing_algorithm);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="coin-item">
      <p>{hashingAlgorithm}</p>
    </div>
  );
};
export default Fetch;
