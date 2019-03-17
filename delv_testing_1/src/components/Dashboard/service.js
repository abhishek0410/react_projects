import Papa from "papaparse";
import FileDownload from "js-file-download";

import { xrayApi } from "services/app-utils";

export function getUsers(organization_id) {
  return xrayApi.get(
    "/api/v2/organizations/" + organization_id + "/users.json"
  );
}
