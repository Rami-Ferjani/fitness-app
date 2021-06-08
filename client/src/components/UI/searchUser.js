import "../../css/chatOnline.css";

import React, { useState, useEffect } from "react";

function SearchUser({ name }) {
  const [friends, setFriends] = useState([]);

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
        <span className="chatOnlineName">{name}</span>
      </div>
    </div>
  );
}

export default SearchUser;
