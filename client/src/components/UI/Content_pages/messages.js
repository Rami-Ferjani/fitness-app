import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
const messages = ({ chatsData }) => {
  const [chats, setChats] = useState(chatsData);
  return <div></div>;
};

messages.getInitialProps = async (ctx) => {
  try {
    const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
    const state = useSelector((state) => state);
    const userId = state.auth.person.id;
    const user={userId:userId};
    const body=JSON.stringify(user);
    const res = await axios.get("/api/chats",body,config);
    return { chatsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default me;
