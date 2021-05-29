const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" }, //whose model

  chats: [
    // all the chat of the user a user can have multiple chats with multiple users
    {
      messagesWith: { type: Schema.Types.ObjectId, ref: "person" },
      messages: [
        {
          msg: { type: String, required: true },
          sender: { type: Schema.Types.ObjectId, ref: "person" },
          receiver: { type: Schema.Types.ObjectId, ref: "person" },
          date: { type: Date },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Chat", ChatSchema);
