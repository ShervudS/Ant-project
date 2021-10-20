import React, { useState } from "react";
import "./app.sass";

import Auth from "../Auth/Auth";
import Main from "../Main/Main";

export const AppContext = React.createContext();

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || false);

  const toggleIsAuth = () => {
    setIsAuth((prev) => !prev);
  };

  const [userData, setUserData] = useState({
    userName: "admin",
    password: "admin",
  });

  return (
    <AppContext.Provider
      value={{ isAuth, toggleIsAuth, userData, setUserData }}
    >
      <div className="App">{isAuth ? <Main /> : <Auth />}</div>
    </AppContext.Provider>
  );
}

export default App;
