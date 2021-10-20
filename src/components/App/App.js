import React, { useState } from "react";
import "./app.sass";

import Auth from "../Auth/Auth";
import Main from "../Main/Main";

export const AuthContext = React.createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [userData, setUserData] = useState({
    userName: "admin",
    password: "admin",
  });

  return (
    <AuthContext.Provider value={(isAuth, setIsAuth, userData, setUserData)}>
      <div className="App">{isAuth ? <Main /> : <Auth />}</div>
    </AuthContext.Provider>
  );
}

export default App;
