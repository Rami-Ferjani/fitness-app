import React, { useEffect, useState, useRef } from "react";
import "../../../css/Messenger.css";
import ChatOnline from "../ChatOnline";
import Conversation from "../Conversation";
import Message from "../Message";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
function Messenger() {
  const state = useSelector((state) => state);
  const [Conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  //const [socket, setSocket] = useState(null);
  const socket = useRef();
  const id = state.auth.person.id;
  const User = state.auth.person;
  const scrollRef = useRef(null);

  //Socket effects
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);
  useEffect(() => {
    return () => {
      if (socket) {
        socket.current.emit("addUser", User.id);
        socket.current.on("getUsers", (users) => {
          console.log(users);
        });
      }
    };
  }, [User]);
  /*useEffect(() => {
    setSocket(io("ws://localhost:8900"));
  }, []);*/
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
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/api/messages/" + currentChat._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  const handleSubmit = async (e) => {
    console.log("ive started working");
    e.preventDefault();
    const message = {
      sender: User.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await axios.post("/api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    return () => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, [messages]);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="search for friends" className="chatMenuUnput" />
          {Conversations.map((conversation) => (
            <div onClick={() => setCurrentChat(conversation)}>
              <Conversation conversation={conversation} currentUser={User} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <div>
              <div className="chatBoxTop">
                {messages.map((message) => {
                  return (
                    <div ref={scrollRef}>
                      <Message message={message} own={message.sender === id} />
                    </div>
                  );
                })}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(event) => setNewMessage(event.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <span className="noConversationText">
              Open a conversation to start a chat
            </span>
          )}
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
