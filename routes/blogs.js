const express = require("express");
const router = express.Router();
const dummy = require("../controllers/dummy")
const createcomment = require("../controllers/commentcontroller");
const {createpost,getallpost} = require("../controllers/postcontroller")
const {likepost,unlikepost} = require("../controllers/likecontroller");

router.get("/dummy",dummy) ;
router.post("/comments/create" , createcomment);
router.post("/posts/create", createpost);
router.get("/posts" , getallpost);
router.post("/likes/like" ,likepost )
router.delete("/likes/unlike/:id", unlikepost)
 
module.exports =router;