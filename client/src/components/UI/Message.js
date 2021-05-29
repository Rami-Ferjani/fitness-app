import "../../css/Message.css";
import React from "react";

function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <p className="messageText">Hello this is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}

export default Message;
