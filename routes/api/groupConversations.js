const express = require("express");
const router = express.Router();
const groupConversation = require("../../models/groupConversation");

// new conv

router.post("/", async (req, res) => {
  const newConversation = new groupConversation({
    members: req.body.membersIds,
    name: req.body.name,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get conv of a user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await groupConversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
