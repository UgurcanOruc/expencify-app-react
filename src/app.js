import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from './actions/auth';
import Loader from "./components/Loader";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
require("./firebase/firebase");
import { getAuth, onAuthStateChanged } from "firebase/auth";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById("app"));
      hasRendered = true;
    }
}

ReactDOM.render(<Loader />, document.getElementById("app"));


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("log in id: " + user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    // User is signed out
    store.dispatch(logout());
    renderApp();
    console.log("log out");
    history.push("/");
  }
});