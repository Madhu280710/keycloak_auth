import Keycloak from 'keycloak-js';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/slices/authSlice";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "BookMyShow",
  clientId: "BMS",
});

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      if (authenticated) {
        dispatch(loginSuccess(keycloak.token!));
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>BookMyShow</h1>
    </div>
  );
};

export default App;
