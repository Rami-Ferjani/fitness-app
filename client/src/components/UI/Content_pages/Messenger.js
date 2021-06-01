import React,{useEffect, useState} from "react";
import "../../../css/Messenger.css";
import ChatOnline from "../ChatOnline";
import Conversation from "../Conversation";
import Message from "../Message";
import { useSelector } from "react-redux";
import axios from "axios";
function Messenger() {
  const state = useSelector((state) => state);
  const [conversations,setConversations]=useState([]);
  const id=state.auth.person.id;
  console.log(id);
  useEffect(async()=>{

    const getConversations=async ()=>{
      console.log("i've started");
      const res=await axios.get("/api/conversations/"+id);
      console.log("im workiing");
      console.log(res);
    }
  },[id]);
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
          </div>
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
