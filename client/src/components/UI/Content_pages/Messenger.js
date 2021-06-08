import React, { useEffect, useState, useRef } from "react";
import "../../../css/Messenger.css";
import ChatOnline from "../ChatOnline";
import SearchUser from "../searchUser";
import Conversation from "../Conversation";
import Message from "../Message";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import { Button, Form, FormGroup } from "reactstrap";
function Messenger() {
  const state = useSelector((state) => state);
  const [Conversations, setConversations] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchName, setSearchName] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState({});
  const [onlineUsers, setonlineUsers] = useState([]);
  const [associates, setAssociates] = useState([]);
  const socket = useRef();
  const id = state.auth.person.id;
  const User = state.auth.person;
  const scrollRef = useRef(null);

  //Socket effects
  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage && currentChat) {
      if (currentChat.members.includes(arrivalMessage.sender)) {
        //setMessages((prev) => [...prev, arrivalMessage]);
        setMessages([...messages, arrivalMessage]);
      }
    }
  }, [arrivalMessage, currentChat]);
  useEffect(() => {
    socket.current.emit("addUser", User.id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
      setonlineUsers(users);
    });
  }, [User]);

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
    const receiverId = currentChat.members.find((member) => member !== User.id);

    //Sending socket message
    socket.current.emit("sendMessage", {
      senderId: User.id,
      receiverId: receiverId,
      text: newMessage,
    });

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

  /* Conversations.map((conversation) => {
    console.log("I worked here");
    conversation.members.map((member) => {
      if (member !== id) {
        console.log("I worked here");
        setAssociates([...associates, member]);
      }
    });
  });*/
  /**/ useEffect(() => {
    const handleSearch = () => {
      if (searchName.length === 0) {
        setSearch([]);
      } else if (searchName.length > 2) {
        axios.get(`/api/persons/search/${searchName}`).then((res) => {
          setSearch(res.data);
        });
      }
    };
    handleSearch();
    setSearchName("");
  }, [searchName]);
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setSearchName(searchValue);
  };
  const handleClick = (search) => {
    console.log("I was clicked");
    console.log(search);
    setSearch([]);
    setSearchValue("");
    let exist = false;
    Conversations.map((conv) => {
      if (conv.members.includes(search._id)) {
        setCurrentChat(conv);
        exist = true;
      }
    });
    if (!exist) {
      setCurrentChat([]);
      axios
        .post("/")
        .then((res) => {
          setCurrentChat(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <Form onSubmit={handleSubmit2}>
            <FormGroup>
              <input
                placeholder="search for friends"
                className="chatMenuUnput"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
              <Button color="info" value="submit" />
            </FormGroup>
          </Form>
          {search.map((search1) => (
            <div onClick={() => handleClick(search1)}>
              <div>
                {/*<h1>{search.name}</h1>*/}
                <SearchUser name={search1.name} />
              </div>
              {/*<Conversation conversation={search} currentUser={User} />*/}
            </div>
          ))}
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
                {messages.map((message, i) => {
                  return (
                    <div ref={scrollRef}>
                      <Message
                        message={message}
                        own={message.sender === id}
                        key={i}
                      />
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
          <h3>Group chats</h3>
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={id}
            setCurrentChat={setCurrentChat}
            associates={associates}
          />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
