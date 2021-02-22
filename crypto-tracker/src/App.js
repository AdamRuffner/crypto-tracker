import { Route, Switch } from "react-router-dom";
import AllCoins from "./components/AllCoins";
import Coin from "./components/Coin";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/details/:id">
          <Coin />
        </Route>

        <Route path="/">
          <AllCoins />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
