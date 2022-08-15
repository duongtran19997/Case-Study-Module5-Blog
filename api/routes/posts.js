const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// CREATE NEW POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  console.log(req.body);
  try {
    const saevdPost = await newPost.save();

    return res.status(200).json(saevdPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  // only you can update your post
  try {
    const post = await Post.findById(req.params.id);
    if (post?.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json("Update successfully!");
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  // only you can delete your post
  try {

    const post = await Post.findById(req.params.id);
    console.log(req.body.username);
    if (post?.username === req.body.username) {
      try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json("Delete successfully!");
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ONE POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//GET ALL POST
router.get("/", async (req, res) => {
  const { user: username, cat: catName } = await req.query;
  try {
    let posts = [];
    if (username && catName) {
      posts = await Post.find({
        username,
        categories: {
          $in: [catName],
        },
      });
    } else if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
