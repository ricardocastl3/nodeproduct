const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_LOCATION}`
    );

    console.log(`Connected Successfully!`);
  } catch (error) {
    console.log(`Error when try connect at server: ${error}`);
  }
};

module.exports = connectToDatabase;
