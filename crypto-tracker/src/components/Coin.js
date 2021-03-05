import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Coin() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setDetail(res.data);
        console.log("res.data", res.data)
        console.log("res.data.image", res.data.image)
        console.log("detail", detail)
        console.log("detail.image", detail.image)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="id-form">
      <h1>{detail.name}</h1>
      <h2>{detail.symbol}</h2>
      <h3>{detail.categories}</h3>
      {/* <img src={detail.image.small} alt='crypto' /> */}
      {/* <h4>Description: {detail.description.en}</h4> */}
    </div>
  );
}

export default Coin;
