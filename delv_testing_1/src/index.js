import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router, hashHistory, Route } from "react-router";
import { xrayApi } from "./services/app-utils";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import Login from "./modules/auth/login";
import { loadStore } from "./store";
//import "styles/main.css";
import "./styles/main.css";

import * as serviceWorker from "./serviceWorker";

loadStore().then(store => {
  const history = syncHistoryWithStore(hashHistory, store, {
    selectLocationState(state) {
      return state.get("routing").toObject();
    }
  });

  history.listen(location => {
    //
  });

  function checkAuth(nextState, replace) {
    if (nextState.location.pathname !== "/") {
      var user = store
        .getState()
        .get("auth")
        .get("user");
      var userToken = store
        .getState()
        .get("auth")
        .get("usertoken");
      //adding authentication to xrayApi call on each route change
      //to prevent loss of permission on hard refresh 403 error
      xrayApi.defaults.headers.common["Authorization"] = userToken;
      if (!user) {
        replace("/");
      }
    }
  }

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Login} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
