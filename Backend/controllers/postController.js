import BlogPosts from "../models/blogPosts.js";
import BlogLikes from "../models/blogLikes.js";
import BlogComments from "../models/blogComments.js";

async function fetchPosts(req, res) {
  console.log("Fetching Posts");

  try {
    const posts = await BlogPosts.findAll();

    if (!posts) {
      throw new Error("Fetching Error!");
    }

    console.log("Fetching Successful");
    res
      .status(200)
      .json({ message: "Successfully Fetched all Posts", data: posts });
  } catch (error) {
    console.log("Fetching Unsuccessful");
    res.status(500).json({ error: error.message });
  }
}

async function postContent(req, res) {
  console.log("Uploading Content");
  const { title, content, userId, username } = req.body;

  try {
    const postResult = await BlogPosts.create({
      accountId: userId,
      blogTitle: title,
      blogContent: content,
      blogImage: null,
      author: username,
    });

    if (!postResult) {
      throw new Error("Error Uploading Blog");
    }

    res.status(200).json({ message: "Blog Upload Successful!" });
    console.log("Uploading Successful");
  } catch (error) {
    console.log("Uploading Unsuccessful");
    res.status(500).json({ error: error.message });
  }
}

async function getLikes(req, res) {
	
	const {blogId} = req.body;

	try {
		
		const likesResult = await BlogLikes.findAll({where: {blogId}})

		if (!likesResult){
			throw new Error("Fetching Posts Error")
		}

		res.status(200).json({message: "Successfully Fetched Posts"})

	} catch (error) {
		console.log("Failed Getting Posts")
		res.status(500).json({message: error.message})
	}

}

async function likePost(req, res) {
  const { blogId, userId } = req.body;

  try {
    const isLiked = await BlogLikes.findOne({
      where: {
        blogId,
        userId,
      },
    });

    if (!isLiked) {
      const unLikeResult = await BlogLikes.destroy({
        where: {
          blogId,
          userId,
        },
      });

      if (!unLikeResult) {
        throw new Error("Error Unliking Comment");
      }

      res.status(200).json({ message: "Successfully Unliked a Post" });
    } else {
      const likeResult = await BlogLikes.create({
        blogId,
        userId,
      });

      if (!likeResult) {
        throw new Error("Error Liking Post");
      }

      res.status(200).json({ message: "Successfully Liked a Post" });
    }
  } catch (error) {
    console.log("Liking Unsuccessful");
    res.status(500).json({ error: error.message });
  }
}

export default {
  postContent,
  fetchPosts,
  getLikes,
  likePost,
};
