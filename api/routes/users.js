const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account!");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // First delete all post by this user, then delete user
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json("User not found!");
      try {
        // If user found -> delete all post by user
        const deletedPost = await Post.deleteMany({
          username: user.username,
        });

        console.log(deletedPost.deletedCount);

        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res
          .status(200)
          .json(
            `User and ${deletedPost.deletedCount} post(s) has been deleted! `
          );
      } catch (err) {
        return res.status(500).json(err);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account!");
  }
});

// GET ONE USER
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userInfo } = user?.["_doc"];
    return res.status(200).json(userInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
