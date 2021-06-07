import "../../css/chatOnline.css";

import React, { useState, useEffect } from "react";

function chatOnline({ onlineUsers, currentId, setCurrentChat, associates }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {}, []);
  console.log(associates);
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
    </div>
  );
}

export default chatOnline;
