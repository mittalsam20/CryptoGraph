import CoinList from "../comp/coinlist";
import AddCoin from "../comp/addcoin";
const Summary = () => {
  return (
    <>
      <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
        <AddCoin />
        <CoinList />
      </div>
    </>
  );
};

export default Summary;
