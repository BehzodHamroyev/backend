const postService = require("../server/post.service");


class PostController {
  async getAll(req, res) {
    try {
      const posts = await postService.getAllPosts();
      res.status(200).json(posts);
    } catch (err) {
      console.log(err);
    }
  }

  async createPost(req, res) {
    try {
      const newPost = await postService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const updatePost = await postService.updatePost(id, req.body);
      res.status(200).json(updatePost);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async deletePost(req,res){
    try{
        const {id}=req.params;
        const deletedPost=await postService.deletePost(id);
        res.status(200).json(deletedPost)
    }
    catch(error){
        res.status(400).json({error:error})
    }
  }
  
  async getPostById(req,res){
    try{
        const {id}=req.params;
        const post=await postService.getPostById(id);
        res.status(200).json(post)
    }
    catch(error){
        res.status(400).json({error:error})
    }
  }
}

module.exports = new PostController();
