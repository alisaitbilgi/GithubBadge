import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./components/App";
import NavigationBar from "./components/NavigationBar";
import Badge from "./components/Badge";
import Profile from "./components/Profile";
||||||| merged common ancestors
import App from "./containers/App";
<<<<<<< HEAD
=======
import App from "./containers/App";
import NavigationBar from "./containers/NavigationBar";
import BadgeContainer from "./containers/BadgeContainer";
import ProfilePresenter from "./components/ProfilePresenter";
>>>>>>> master
||||||| merged common ancestors
=======
import NavigationBar from "./containers/NavigationBar";
import BadgeContainer from "./containers/BadgeContainer";
import ProfilePresenter from "./components/ProfilePresenter";
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
import {Provider} from "react-redux";
<<<<<<< HEAD
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import configStore from './store/configStore';

const store = configStore();
||||||| merged common ancestors
import {createStore} from "redux";
import reducers from "./reducers/singleReducer";
<<<<<<< HEAD
=======
import {createStore} from "redux";
import reducers from "./reducers/singleReducer";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
>>>>>>> master
||||||| merged common ancestors
=======
import {Router, Route, IndexRoute, Redirect, browserHistory} from "react-router";
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={Profile} />
            </Route>
            <Route path="users(/:username)" component={Badge} />
        </Router>
||||||| merged common ancestors
    <Provider store={createStore(reducers)}>
<<<<<<< HEAD
        <App />
=======
    <Provider store={createStore(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={ProfilePresenter} />
            </Route>
            <Route path="/users(/:userName)" component={BadgeContainer} />
        </Router>
>>>>>>> master
||||||| merged common ancestors
        <App />
=======
        <Router history={browserHistory}>
            <Route path="/" component={NavigationBar}>
                <IndexRoute component={App} />
                <Route path="profile" component={ProfilePresenter} />
                <Redirect to="/" />
            </Route>
            <Route path="/users(/:userName)" component={BadgeContainer} />
        </Router>
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
    </Provider>
  , document.getElementById("root")
);
