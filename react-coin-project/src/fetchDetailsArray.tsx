import { useState, useEffect } from "react";
import { ICoinDetails } from "./models";
import axios from "axios";

const Fetch = () => {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState();
  const [hashingAlgorithm, setHashAlg] = useState("");

  //   useEffect(() => {
  //     const url = `https://api.coingecko.com/api/v3/coins/${name}`;

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => {
        setDetails(response.data);
        setHashAlg(response.data.hashing_algorithm);
      });
  }, []);

  return (
    <div>
      {details.map((detail: ICoinDetails) => (
        <div className="coin-item">
          <p>{detail.symbol}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;
