const postModel = require("../model/post.model");

class PostService {
  getAllPosts = async () => {
    const posts = await postModel.find();
    return posts;
  };

  createPost = async (body) => {
    const newPost = await postModel.create(body);
    return newPost;
  };

  deletePost = async (id) => {
    if (!id) {
      throw new Error("Id is required");
    }
    const deletedPost = await postModel.findByIdAndDelete(id);
    return deletedPost;
  };

  updatePost = async (id, body) => {
    if (!id) {
      throw new Error("Id is required");
    }
    const updatedPost = await postModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedPost;
  };

    getPostById = async (id) => {   
    if (!id) {
      throw new Error("Id is required");
    }
    const post = await postModel.findById(id);
    return post;
  };
}

module.exports = new PostService();
