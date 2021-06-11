const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
  {
    name: { type: String, required: true },
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("groupConversation", ConversationSchema);
