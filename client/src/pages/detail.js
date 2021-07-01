import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../comp/chart";
import Info from "../comp/info";
import coingecko from "../api/coingecko";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [coinInfo, setCoinInfo] = useState({});

  useEffect(() => {
    const fetchprice = async () => {
      const [day, week, year] = await Promise.all([
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "1",
          },
        }),
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "7",
          },
        }),
        coingecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "15",
          },
        }),
      ]);
      setCoinInfo({
        day: day.data.prices,
        week: week.data.prices,
        year: year.data.prices,
      });
    };
    fetchprice();
  }, []);

  useEffect(() => {
    console.log(coinInfo);
  }, [coinInfo]);

  // const renderData = () => {
  //   return <div></div>;
  // };
  return (
    <div>
      <Chart />
      <Info />
    </div>
  );
};

export default Detail;
