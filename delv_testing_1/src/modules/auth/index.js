import { xrayApi } from "H:/react_projects/delv_testing_1/src/services/app-utils";

export function login(username, password) {
  let authObject = {
    auth: {
      username: username,
      password: password
    }
  };

  return new Promise(function(resolve, reject) {
    xrayApi
      .post("/login/", authObject)
      .then(function(response) {
        var validResponse = false;

        xrayApi.defaults.headers.common["Authorization"] =
          "Basic " + response.data.token;

        if (response.data.user) {
          if (response.data.user.id) {
            validResponse = true;

            xrayApi
              .get("/user/" + response.data.user.id)
              .then(function(userResponse) {
                if (userResponse.data.user_fields.organization_admin === true) {
                  resolve({
                    data: userResponse.data,
                    userToken: response.data.token
                  });
                } else {
                  reject("User isn't an admin.");
                }
              })
              .catch(function(error) {
                console.log("Get user info error: ", error);
                reject(error);
              });
          }
        }

        if (validResponse === false) {
          reject("User not found.");
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
