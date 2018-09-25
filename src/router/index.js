import React from "react";
import { Route } from "react-router-dom";
import Features from "../components/Main/features";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export default () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/features" component={Features} />
    </div>
  </ConnectedRouter>
);
