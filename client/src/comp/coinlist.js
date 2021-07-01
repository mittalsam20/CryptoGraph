import { useContext, useEffect, useState } from "react";
import coingecko from "../api/coingecko";
import { watchListContext } from "../context/watchlist";
import CoinCard from "./coincard";
const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { wl, delcoin } = useContext(watchListContext);
  const [loading, setLoading] = useState(false);
  console.log("s", wl);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const res = await coingecko.get("/coins/markets", {
        params: {
          vs_currency: "inr",
          ids: wl.join(","),
        },
      });
      setCoins(res.data);
      console.log(res.data);
      setLoading(false);
    };
    fetchdata();
  }, [wl]);

  const renderCoins = () => {
    if (loading) {
      return <div>Loading...!!</div>;
    }
    return (
      <ul className="cointlist list-group mt-2">
        {coins.map((coin) => {
          return <CoinCard key={coin.id} coin={coin} delcoin={delcoin} />;
        })}
      </ul>
    );
  };

  return (
    <>
      <div>{renderCoins()}</div>
    </>
  );
};

export default CoinList;
