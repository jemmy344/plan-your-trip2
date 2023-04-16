import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={"Loading...."} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
)

