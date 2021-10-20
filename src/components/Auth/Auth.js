import React from "react";
import './animation.css'
import './auth.sass'

import AuthModal from './AuthModal/AuthModal'

const Auth = () => {
    return(
        <div className="Auth">
            <div className="box box10"></div>
            <div className="box box9"></div>
            <div className="box box8"></div>
            <div className="box box7"></div>
            <div className="box box6"></div>
            <div className="box box5"></div>
            <div className="box box4"></div>
            <div className="box box3"></div>
            <div className="box box2"></div>
            <div className="box box1"></div>
            <div className="box box0"></div>
          <AuthModal />
        </div>
    )
}

export default Auth