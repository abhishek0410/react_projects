import transit from "transit-immutable-js";
import localforage from "localforage";
import { setItems } from "localforage-setitems";
import { getItems } from "localforage-getitems";
import IM from "immutable";

import entries from "object.entries";

import _ from "lodash";

const localForage = Object.assign(localforage, setItems, getItems);

var storage = null;

var keys = [];

export const createInstance = function(name, whitelist, blacklist) {
  if (!name || !whitelist) {
    console.log("requires name and whitelist parameters");
    return;
  }

  storage = localForage.createInstance({
    name: "prompto-x-ray_1.0"
  });

  keys = _.xor(whitelist, blacklist);
};

export const saveDiffStores = (previousState, newState) => {
  const diffStores = getDiffs(previousState, newState, keys);
  saveState(diffStores);
};

const getDiffs = (previousState, newState) => {
  var storesToSave = [];

  keys.forEach(key => {
    if (previousState.get(key) !== newState.get(key)) {
      const stateJSON = transit.toJSON(newState.get(key));
      storesToSave.push({ key: key, value: stateJSON });
    }
  });

  return storesToSave;
};

export const loadState = () => {
  return new Promise((resolve, reject) => {
    localForage
      .getItems(keys)
      .then(results => {
        var state = {};
        const entryArray = entries(results);

        entryArray.forEach(entry => {
          if (entry[1] !== null) {
            state[entry[0]] = transit.fromJSON(entry[1]);
          }
        });

        if (_.isEmpty(state)) {
          resolve(undefined);
        } else {
          const imstate = IM.fromJS(state);
          resolve(imstate);
        }
      })
      .catch(err => {
        console.log(err);
        resolve(undefined);
      });
  });
};

export const clearState = () => {
  return new Promise((resolve, reject) => {
    storage
      .clear()
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export const saveState = storesToSave => {
  return new Promise((resolve, reject) => {
    localForage
      .setItems(storesToSave)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
