const express = require("express");
const router = express.Router();
const ChatModel = require("../../models/ChatModel");
const authMiddleware = require("../../middleware/auth");

//GET ALL CHATS

router.get("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await ChatModel.findOne({ user: userId }).populate(
      "chats.messagesWith"
    );
        let chatsToBeSent=[]
        
        if(user.chats.length>0){
            chatsToBeSent=await user.chats.map(chat=>({
                messagesWith:chat.messagesWith._id,
                name:chat.messagesWith.name,
                //profilePicUrl:chat.messagesWith.profilePicUrl,
                lastMessage:chat.messages[chat.messages.length-1].msg,
                date:chat.messages[chat.messages.length -1].date,
            }))
        }
    return res.json(chatsToBeSent);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
