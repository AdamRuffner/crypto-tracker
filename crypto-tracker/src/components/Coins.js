import React from "react";
import { Link } from "react-router-dom";
import "../css/Coins.css";

const Coins = ({
  name,
  id,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <Link to={`/details/${id}`} style={{textDecoration: 'none' }}>
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Coins;
