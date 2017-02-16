import I from "immutable";

<<<<<<< HEAD
<<<<<<< HEAD
export default function singleReducer(state = I.Map(), action) {
||||||| merged common ancestors
export default function singleReducer(state = I.fromJS({responseObject: I.List()}), action) {
=======
export default function singleReducer(state = I.fromJS({username: "", responseObject: I.List()}), action) {
>>>>>>> master
||||||| merged common ancestors
export default function singleReducer(state = I.fromJS({responseObject: I.List()}), action) {
=======
export default function singleReducer(state = I.Map(), action) {
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
  switch (action.type) {
<<<<<<< HEAD
  case "SET_USER_INFO":
    return state.set("badgeUserInfo", action.data);
  case "SET_REPO_INFO":
    return state.set("badgeRepoInfo", action.data);
  case "SET_USERNAME":
    return state.set("username", action.data);
  case "SET_TEMP_USERNAME":
    return state.set("tempUsername", action.data);
||||||| merged common ancestors
  case "SET_RESPONSE_OBJECT":
    return state.set("responseObject", action.data);
<<<<<<< HEAD
=======
  case "SET_RESPONSE_OBJECT":
    return state.set("responseObject", action.data);
  case "SET_USERNAME":
    return state.set("username", action.data);
>>>>>>> master
||||||| merged common ancestors
=======
  case "SET_USERNAME":
    return state.set("username", action.data);
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
  default:
    return state;
  }
}

