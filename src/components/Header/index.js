import React from "react";
import "./styles.css";

import Facebook from "../../img/Facebook.svg";
import Invite from "../../img/Invite.svg";
import Messenger from "../../img/Messenger.svg";
import Notification from "../../img/Notification.svg";

const Header = () => (
  <header id="main-header">
    <img src={Facebook} alt="facebook-logo" />

    <nav>
      <ul>
        <li>
          <img src={Invite} alt="friend-invite" />
        </li>
        <li>
          <img src={Messenger} width="28px" height="28px" alt="messenger" />
        </li>
        <li>
          <img src={Notification} alt="notification" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
