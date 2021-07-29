import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { MeasurementCard } from "./components/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={MeasurementCard} />
    </Switch>
  );
};
export default Routes;
