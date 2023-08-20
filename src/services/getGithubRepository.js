import { getRequest } from "./common";

export default function getGithubRepository(organization, params, config = {}) {
  return getRequest(`orgs/${organization}/repos?${params}`, config);
}
