import { useState, useEffect } from "react";
import { ICoinDetails } from "./models";
import axios from "axios";

const Fetch = ({ id }: any) => {
  const [coinsDetails, setDetails] = useState<ICoinDetails>();

  //  const [coinsDetails, setDetails] = useState();
  const [name, setName] = useState();
  const [hashingAlgorithm, setHashAlg] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
        console.log(coinsDetails?.description);
      });
  }, []);

  return (
    <div>
      <div className="coin-item">
        <p>Name: {coinsDetails?.name} </p>
        <p>Symbol: {coinsDetails?.symbol}</p>
        <p>Hashing algorithm: {coinsDetails?.hashing_algorithm} </p>
        <p>Description:{getKeyByValue(coinsDetails?.description, "en")}</p>
        <p>Genesis date: {coinsDetails?.genesis_date}</p>
      </div>
    </div>
  );
};
export default Fetch;

function getKeyByValue(object: any, value: any) {
  if (object !== undefined)
    return Object.keys(object).find((key) => object[key] === value);
}
