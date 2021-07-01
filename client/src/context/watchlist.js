import React, { createContext, useState } from "react";

export const watchListContext = createContext();

export const WatchList = (props) => {
  const [wl, setWl] = useState(["bitcoin", "ethereum", "ripple", "cardano"]);

  const delcoin = (coin) => {
    setWl(
      wl.filter((ele) => {
        return ele !== coin;
      })
    );
  };

  return (
    <watchListContext.Provider value={{ wl, delcoin }}>
      {props.children}
    </watchListContext.Provider>
  );
};
