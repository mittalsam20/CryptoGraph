import { BrowserRouter, Route } from "react-router-dom";
import Summary from "./pages/summary";
import Detail from "./pages/detail";
import Header from "./comp/header";
import { WatchList } from "./context/watchlist";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <WatchList>
          <BrowserRouter>
            <Header />
            <Route exact path="/coindetail/:id" component={Detail} />
            <Route exact path="/" component={Summary} />
          </BrowserRouter>
        </WatchList>
      </div>
    </>
  );
}

export default App;
