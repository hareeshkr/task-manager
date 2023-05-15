const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connect to database");
    console.log(
      `Open http://localhost:${process.env.PORT} to view it in the browser`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
