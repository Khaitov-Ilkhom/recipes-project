import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.ts";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
      <StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
      </StrictMode>
  );
}
