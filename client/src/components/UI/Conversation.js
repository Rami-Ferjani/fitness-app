import "../../css/Conversation.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Conversation({ conversation, currentUser }) {
  const [User, setUser] = useState({});

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);

    const getUser = () => {
      axios
        .get("/api/persons/" + friendId)
        .then((res) => {
          setUser(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
    console.log(User);
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
      />
      <span className="conversationName">{User.name}</span>
    </div>
  );
}

export default Conversation;
