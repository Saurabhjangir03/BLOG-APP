// const { response } = require("express");
const  Like  = require("../models/likemodel");
const Post = require("../models/postmodel");
// const { post } = require("../routes/blogs");

// like  a  post  
const likepost = async (req,res) => {
    try {
           const {post , user} = req.body;
           const like = new Like({ post,user }) ;
           const responce = await like.save();
        //   now update  the post  
     
    const updatedpost = await Post.findByIdAndUpdate(post,{$push : {likes : responce._id}},{new : true}).populate("likes").exec();
    res.status(200).json({
        post : updatedpost,
        message : "success"
    })
    } catch (error) { 
        res.status(500).json({
            message: error.message,
        })
        
    }
}

// module.exports = likepost;

// unlike  a post 
const unlikepost = async (req,res) => {
    try {
        const {post,user} = req.body
        const id = req.params.id;
        const responce = await Like.findByIdAndDelete(id);
    //   update  the  post  after  unlike  
     const  updatepost = await Post.findByIdAndUpdate(responce.post,{$pull :{likes :responce._id}}, {new : true}).populate("likes").exec();
        res.status(200).json({
             data : updatepost,
             message : "success"
        })

        
    } catch (error) {
        res.status(500).json({
            message : error.message,
        })
        
    }
}
module.exports = {likepost,unlikepost};


