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
import CreateGroupChat from "../CreateGroupChat";
function Messenger() {
  const state = useSelector((state) => state);
  const [Conversations, setConversations] = useState([]);
  const [groupConversations, setgroupConversations] = useState([]);
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
    console.log("1");
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
    console.log("2");
    if (arrivalMessage && currentChat) {
      console.log(currentChat.members);
      if (currentChat.members.includes(arrivalMessage.sender)) {
        //setMessages((prev) => [...prev, arrivalMessage]);
        setMessages([...messages, arrivalMessage]);
      }
    }
  }, [arrivalMessage, currentChat]);
  useEffect(() => {
    console.log("3");
    socket.current.emit("addUser", User.id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
      setonlineUsers(users);
    });
  }, [User]);

  useEffect(() => {
    console.log("4");
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
    axios
      .get("/api/groupConversations/" + id)
      .then((res) => {
       setgroupConversations(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    getConversations();
  }, [id]);

  useEffect(() => {
    console.log("5");
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
    console.log("6");

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
    console.log("7");
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
    console.log("8");
    const handleSearch = () => {
      if (searchName.length === 0) {
        setSearch([]);
      } else if (searchName.length > 2) {
        console.log("i sould be working");
        axios
          .get(`/api/persons/search1/${searchName}`)
          .then((res) => {
            setSearch(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    handleSearch();
    //setSearchName("");
  }, [searchName]);
  const handleSubmit2 = (e) => {
    console.log("9");
    e.preventDefault();

    setSearchName(searchValue);
  };
  const handleClick = (search) => {
    console.log("10");
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
      //setCurrentChat([]);
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
      const senderId = id;
      const receiverId = search._id;
      const body = JSON.stringify({ senderId, receiverId });
      axios
        .post("/api/conversations", body, config)
        .then((res) => {
          console.log("after this");
          console.log(res.data);

          setConversations([res.data, ...Conversations]);
          setCurrentChat(res.data);
          console.log("chat after this");
          console.log(currentChat);
          setSearchName("");
          setSearchValue("");
          setSearch([]);
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
              <Button color="info" value="submit">
                Search
              </Button>
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
            {groupConversations.map((conversation) => (
            <div onClick={() => setCurrentChat(conversation)}>
              <Conversation conversation={conversation} currentUser={User} groupChat={true} />
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
          <CreateGroupChat
            buttonLabel="Create Group Chat"
            setgroupConversations={setgroupConversations}
            groupConversations={groupConversations}
          />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
