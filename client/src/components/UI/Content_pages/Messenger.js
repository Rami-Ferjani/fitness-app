import React from "react";
import "../../../css/Messenger.css";
import Conversation from "../Conversation";
function Messenger() {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="search for friends" className="chatMenuUnput" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop"></div>
          <div className="chatBoxTop"></div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">online</div>
      </div>
    </div>
  );
}

export default Messenger;
