import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.js";
import { Provider } from "react-redux";
import { configStore } from "./store";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>;

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
