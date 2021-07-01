import { Link } from "react-router-dom";
import React from "react";

const CoinCard = ({ coin, delcoin }) => {
  return (
    <>
      <Link className="text-decoration-none my-1 coin">
        <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
          <img className="coinlist-image" src={coin.image} alt="" />
          <span className="text-decoration-none">{coin.current_price}</span>

          <span
            className={
              coin.price_change_percentage_24h < 0
                ? "text-danger mr-3"
                : "text-success mr-3"
            }
          >
            {coin.price_change_percentage_24h < 0 ? (
              <i className="fas fa-sort-down align-middle mr-2"></i>
            ) : (
              <i className="fas fa-sort-up align-middle mr-2"></i>
            )}
            {coin.price_change_percentage_24h}
          </span>
          <i
            onClick={(e) => {
              e.preventDefault();
              delcoin(coin.id);
            }}
            className="delete-icon far fa-times-circle text-danger"
          ></i>
        </li>
      </Link>
    </>
  );
};

export default CoinCard;
