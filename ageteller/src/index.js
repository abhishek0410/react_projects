import React from "react";

import ReactDOM from "react-dom";
import App from "components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import dobReducer from "reducers/store";

ReactDOM.render(
  <div>
    <Provider store={createStore(dobReducer)}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
