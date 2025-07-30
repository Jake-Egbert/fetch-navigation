import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import SearchList from "./components/SearchList";
import SinglePage from "./components/SinglePage";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search/people">People</NavLink>
        <NavLink to="/search/planets">Planets</NavLink>
        <NavLink to="/search/species">Species</NavLink>
        <NavLink to="/search/starships">Starships</NavLink>
        <NavLink to="/search/vehicles">Vehicles</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:route" component={SearchList} />
          <Route path="/single/:route/:id" component={SinglePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
