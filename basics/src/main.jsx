import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
//import { AuthProvider } from "./components/AuthWrapper";
//import { AuthProvider } from "./components/25_26_27_UseContext/AuthContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/28_29_30_31_Redux/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {/* <AuthProvider> */}
      <Provider store={store}>
        <App />
        <Counter />
      </Provider>
      {/* </AuthProvider> */}
    </Router>
  </StrictMode>
);
