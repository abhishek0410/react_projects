function state(state = initialState, action) {
  if (action.namespace !== NAMESPACE) {
    return state;
  }

  switch (action.type) {
    case RESET_STORE:
      return initialState;

    case "SET_USERS":
      const usersMap = action.data.map(function(user) {
        return [user.id, user];
      });
      const imUsers = IM.Map(usersMap);

      return state.setIn(["users", "data"], imUsers);

    default:
      return state;
  }
}

function generateActionCreators(acNames) {
  var actionCreators = {};
  acNames.forEach(acName => {
    actionCreators[_.camelCase("SET_" + acName)] = function(data) {
      return {
        namespace: NAMESPACE,
        type: "SET_" + acName,
        data
      };
    };

    actionCreators[_.camelCase("CLEAR_" + acName)] = function() {
      return {
        namespace: NAMESPACE,
        type: "CLEAR_" + acName
      };
    };
  });

  return actionCreators;
}

const actionCreators = Object.assign(
  generateActionCreators(acNames),
  generateRecordActionCreators(recordAcNames),
  {
    resetStore: resetStore
  }
);
export { actionCreators, state };
