import React from "react";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";

// google auth services
import { auth } from "../../firebase/firebase.utils";

import "./nav-bar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const NavBar = ({currentUser}) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <h1 className="brandTitle">cjko-emporium</h1>
      <div className="animation">
        <i>
          <h4>
            An exercise in...
            <Typing speed={100} loop={true}>
              minimalism.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              patience.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              letting go.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
              discovery.
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
            </Typing>
          </h4>
        </i>
      </div>
    </div>

    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/contact">
        contact
      </Link>
      <Link className="option" to="/cart"> 
        cart
      </Link>
      {currentUser ? 
      <div className="option" onClick={() => auth.signOut()}>sign out</div>
      :
      <Link className="option" to="/login">
        login
      </Link>
      }
      
    </div>
  </div>
);

export default NavBar;
