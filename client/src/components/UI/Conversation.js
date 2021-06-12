import "../../css/Conversation.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Conversation({ conversation, currentUser, groupChat }) {
  const [User, setUser] = useState({});
  const [Name, setName] = useState("");
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);

    const getUser = () => {
      axios
        .get("/api/persons/" + friendId)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [currentUser, conversation]);
  /*if(conversation.name){
    setName(conversation.name);
  }else{
    setName(User.name);
  };*/
  if (!groupChat) {
    return (
      <div className="conversation">
        <img
          className="conversationImg"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <span className="conversationName">
          {User ? User.name : "User not found"}
        </span>
      </div>
    );
  } else {
    return (
      <div className="conversation">
        <img
          className="conversationImg"
          src="https://image.flaticon.com/icons/png/512/1911/1911061.png"
          alt=""
        />
        <span className="conversationName">{conversation.name}</span>
      </div>
    );
  }
}

export default Conversation;
