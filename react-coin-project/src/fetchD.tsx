import { useState, useEffect } from "react";
import { ICoinDetails } from "./models";
import axios from "axios";
const Fetch = () => {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    // axios.get(`https://api.coingecko.com/api/v3/coins/${name}`);
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`);
  }, [name]);
  return (
    <div>
      {details.map((detail: ICoinDetails) => (
        <div className="coin-item">
          <p>{detail.hashing_algorithm}</p>
          <p>{detail.description}</p>
          <p>{detail.homepage}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;
