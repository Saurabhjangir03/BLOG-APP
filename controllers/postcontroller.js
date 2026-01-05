const Post = require("../models/postmodel");

const createpost = async (req,res) => {
      try {
      const {title,body} = req.body;
      const post = new Post({
        title , body
      }) ;
      const savedpost = await post.save();
       res.status(200).json({
         post : savedpost,
         message :"success",
       })

      
    } catch (error) {
        res.status(500).json({
          message : error.message,
        })
        
      }
}
// module.exports = createpost;

const getallpost = async (req,res) => {
     try {
    const responce = await Post.find().populate("comments").exec();
    res.status(200).json({
     data : responce,
     message : "success"
    })

     } catch (error) {
        res.status(500).json({
          message : error.message
        })
        
     }

}

module.exports = {createpost,getallpost};