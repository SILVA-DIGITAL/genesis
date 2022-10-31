const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS);

  console.log(
    `MongoDB connected to server: ${conn.connection.host}:${conn.connection.port}`
  );
  console.log(`MongoDB collection name in use: ${conn.connection.name}`);
  console.log(``), console.log(`Connected successfully`.green.bold);
};

module.exports = connectDB;
