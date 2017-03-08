import {setResponse} from "./actions/setResponse";

export function routeCallback(store) {
  return (nextState) => {
    const username = nextState.params.username || "nzakas";
    const url = {
      repos: `https://api.github.com/users/${username}/repos`,
      users: `https://api.github.com/users/${username}`
    };
    return store.dispatch(setResponse(url.repos, url.users));
  };
}
