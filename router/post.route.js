const express = require("express");
const router = express.Router();
const postController = require("../controler/post.controller");



router.get("/get", postController.getAll);
router.post("/create", postController.createPost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);
router.get("/get/:id",postController.getPostById);



module.exports = router;
