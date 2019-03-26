import "babel-polyfill";

import { createStore } from "redux";

import { fromJS } from "immutable";

//TODO: scan app for stores and load dynamically
//import * as AppStore from "modules/app/store";
import * as AuthStore from "./modules/auth/store";
// import * as InsightsStore from "modules/insights/store";
// import * as NotificationsStore from "modules/notifications/store";
// import * as TicketsStore from "modules/tickets/store";
// import * as UsersStore from "modules/users/store";
// import * as ComponentsStore from "modules/app/components_store"; //cross-module component stores
// import * as ElementsTableComponentStore from "components/ElementsTableComponent/store";
// import * as ElementsTableContainerComponentStore from "components/ElementsTableContainerComponent/store";

// import * as ReportsStores from "modules/reports/store";

// import * as DetailViewStore from "components/DetailView/store";

import { combineReducers } from "redux-immutable";

import { saveDiffStores, loadState, createInstance } from "./services/persist";

import { LOCATION_CHANGE } from "react-router-redux";

const initialState = fromJS({
  locationBeforeTransitions: null
});

const routingState = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    //
    return state.set("locationBeforeTransitions", action.payload);
  }

  return state;
};

const reducers = {
  auth: AuthStore.state
  //   app: AppStore.state,
  //   users: UsersStore.state,
  //   insights: InsightsStore.state,
  //   notifications: NotificationsStore.state,
  //   tickets: TicketsStore.state,
  //   routing: routingState,
  //   components: ComponentsStore.state,
  //   detail: DetailViewStore.state,
  //   reports: ReportsStores.state,
  //   elementsTableComponent: ElementsTableComponentStore.state,
  //   elementsTableContainerComponentStore:
  //     ElementsTableContainerComponentStore.state
};

const reducerKeys = ["app", "auth", "routing"];

//const reducerKeys = Object.keys(reducers)

var baseReducer = combineReducers(reducers);

createInstance("prompto-x-ray_1.0", reducerKeys, []);

var store = {};

export function getStore() {
  return store;
}

export function loadStore() {
  return new Promise((resolve, reject) => {
    loadState()
      .then(loadedState => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
          // dev code
          console.log("Initialising Redux Dev Tools.");
          store = createStore(
            baseReducer,
            loadedState,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__({ latency: 0 })
          );
        } else {
          // production code
          store = createStore(baseReducer, loadedState);
        }

        var previousState = null;
        store.subscribe(() => {
          const newState = store.getState();
          //console.log('new state',newState);

          if (previousState) {
            saveDiffStores(previousState, newState);
          }

          previousState = newState;
        });

        resolve(store);
      })
      .catch(error => {
        console.log(error);
        reject(undefined);
      });
  });
}
