const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejscourse.o2isw4a.mongodb.net/database?retryWrites=true&w=majority`
    );

    console.log(`Connected Successfully!`);
  } catch (error) {
    console.log(`Error when try connect at server: ${error}`);
  }
};

module.exports = connectToDatabase;
