import React, { useState } from "react";
import "./AuthModal.sass";

import SingIn from "./SingIn/SingIn";
import Registration from "./Registration/Registration";

const AuthModal = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleRegistred = () => {
    setIsRegistered((prev) => !prev);
  };

  return (
    <div className="AuthModal">
      {!isRegistered ? (
        <SingIn toggleRegistred={toggleRegistred} />
      ) : (
        <Registration toggleRegistred={toggleRegistred}/>
      )}
    </div>
  );
};

export default AuthModal;
