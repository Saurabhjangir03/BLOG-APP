const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
      mongoose.connect(process.env.MONGOURL)
      .then( () => {
           console.log("db connection successful")
      })

      .catch((error) => {
        console.log(error);
        process.exit(1);
      })
    }

module.exports = dbconnect;

