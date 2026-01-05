const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());
const PORT=process.env.PORT || 4000;
app.listen(PORT, ()  => {
      console.log(`server started  succecfully at ${PORT} port`)
})
 
// mounting path 
const router = require("./routes/blogs");
app.use("/api/v1" ,router);



const dbconnect = require("./config/database")
dbconnect();

app.get("/" , (req,res) => {
     res.send("my blog-post app")
})