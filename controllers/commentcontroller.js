const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");

const createcomment = async (req,res) => {
        try {
            //  data  fetch from request body 
           const {post , user , body} = req.body;
        //    create  new  object 
        const comment = new Comment({
            post , user ,body
        }) ; 
        // save into the  db 
        const responce = await comment.save();
    //   find the  post by id   and  add the  new comment to its comment array  
       const updatedpost = await Post.findByIdAndUpdate(post,{$push : {comments : responce._id}} , {new : true}).populate("comments").exec();
        res.status(200).json({
            post : updatedpost,
            message : "success"
        })

        } catch (error) {
            res.status(500).json({
                message : error.message,
            })
            
        }
}
module.exports = createcomment;