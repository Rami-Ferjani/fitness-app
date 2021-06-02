import React, { useEffect, useState } from "react";
import "../../../css/Messenger.css";
import ChatOnline from "../ChatOnline";
import Conversation from "../Conversation";
import Message from "../Message";
import { useSelector } from "react-redux";
import axios from "axios";
function Messenger() {
  const state = useSelector((state) => state);
  const [Conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const id = state.auth.person.id;
  const User = state.auth.person;
  
  useEffect(() => {
    const getConversations = () => {
      axios
        .get("/api/conversations/" + id)
        .then((res) => {
          setConversations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getConversations();
    
  }, [id]);
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="search for friends" className="chatMenuUnput" />
          {Conversations.map((conversation) => {
            return <Conversation conversation={conversation} currentUser={User} />;
          })}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {
            currentChat?
          <>
          <div className="chatBoxTop">
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="write something..."
            ></textarea>
            <button className="chatSubmitButton">Send</button>
          </div></> : <span className="noConversationText">Open a conversation  to start a chat</span>}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
