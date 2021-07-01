import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Summary from "./pages/summary";
import Detail from "./pages/detail";
import Header from "./comp/header";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Summary} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
