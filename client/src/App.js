import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
