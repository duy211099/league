import React from "react";
// PAGES
import Nav from "./components/Nav";
import ChampionsPage from "./pages/ChampionsPage";
import GlobalStyles from "./components/GlobalStyles";
import ItemsPage from "./pages/ItemsPage";
// ROUTE
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <ChampionsPage />
        </Route>
        <Route path="/items">
          <ItemsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
