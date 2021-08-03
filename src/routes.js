import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { Averages } from "./pages/index";
import { AllData } from "./pages/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
      <Route path="/allData" exact component={AllData} />
    </Switch>
  );
};
export default Routes;
