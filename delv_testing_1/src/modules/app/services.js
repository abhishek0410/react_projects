import { xrayApi } from "H:/react_projects/delv_testing_1/src/services/app-utils";

export function getData(user, org_id, limitter) {
  var organization_id = user.organization_id;

  if (org_id) {
    organization_id = org_id;
  }

  return new Promise((resolve, reject) => {
    Promise.all([
      getRecords("users", organization_id)
      // getAssets(organization_id),
      // getNotificationsSectionId(organization_id),
      // getPolicy(organization_id),
      // getOrganizations(user.id),
      // getRecords("tickets", organization_id, limitter),
      // getRecords("sims", organization_id),
      // getRecords("locations", organization_id),
      // getRecords("products", organization_id),
      // getRecords("costcentres", organization_id),
      // getRecords("asset_history", organization_id),
      // getMongoViews(organization_id),
      // getRecords("changes", organization_id)
    ])
      .then(results => {
        // var simsWithAssets = applyAssignedAssetsToSIMS(
        //   results[1],
        //   results[6],
        //   results[8]
        // );

        resolve({
          users: results[0]
          // assets: results[1],
          // notificationsSectionId: results[2],
          // policy: results[3],
          // organizations: results[4],
          // tickets: results[5],
          // sims: simsWithAssets,
          // locations: results[7],
          // products: results[8],
          // costcentres: results[9],
          // asset_history: results[10],
          // mongo_views: results[11],
          // changes: results[12]
        });
      })
      .catch(error => {
        console.log("Loading org error: ", error);
        reject(error);
      });
  });
}
export function getUsers(organization_id) {
  return new Promise((resolve, reject) => {
    xrayApi
      .get("/api/v2/organizations/" + organization_id + "/users.json")
      .then(result => {
        if (typeof result.data !== "undefined") {
          resolve(result.data.users);
        } else {
          resolve();
        }
      })
      .catch(error => {
        console.log("error", error);
        reject(error);
      });
  });
}

export function getRecords(type, organization_id, limitter) {
  if (type === "tickets") {
    return new Promise((resolve, reject) => {
      xrayApi
        .get("/" + type + "/" + organization_id + "/" + limitter)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      xrayApi
        .get("/" + type + "/" + organization_id)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
