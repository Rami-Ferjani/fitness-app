import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import SearchUser from "./searchUser";
import { set } from "mongoose";
const CreateGroupChat = ({
  groupConversations,
  setgroupConversations,
  buttonLabel,
  className,
}) => {
  const [search, setSearch] = useState([]);
  const [searchName, setSearchName] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  const toggle = () => setModal(!modal);
  const state = useSelector((state) => state);
  const [members, setMembers] = useState([]);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  useEffect(() => {
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
  /*const handleClick = (search) => {
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
  };*/
  useEffect(() => {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    if (submit) {
      let membersIds = members.map((member) => member._id);
      membersIds = [...membersIds, state.auth.person.id];
      const body2 = JSON.stringify({ membersIds, name });
      console.log(body2);
      axios
        .post("/api/groupConversations", body2, config)
        .then((res) => {
          
          setgroupConversations([res.data, ...groupConversations]);
          
          setSubmit(false);
          toggle();
        })
        .catch((err) => {
          console.log("i'm the error");
          console.log(err);
          setSubmit(false);
        });
    }
  }, [submit]);

  const handleClick = (member) => {
    setMembers([...members, member]);
    setSearch([]);
    setSearchValue("");
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Create Group Chat
        </ModalHeader>
        <ModalBody>
          <h3>Name</h3>
          <input
            placeholder="Name of the conversation"
            className="GroupChatName"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <h3>Members</h3>
          <ul>
            {members.map((member) => (
              <li>{member.name}</li>
            ))}
          </ul>
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
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setSubmit(true)}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateGroupChat;
