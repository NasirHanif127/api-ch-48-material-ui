let dburl = `mongodb+srv://<db_username>:<db_password>@myfirstcluster.2zedvpv.mongodb.net/react`

import mongoose from "mongoose";
import colors from "colors";
import  dotenv from 'dotenv';
dotenv.config()


const connectDB = async () => {
//const  DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myfirstcluster.2zedvpv.mongodb.net/react`
 const DB_URL = 'mongodb://127.0.0.1:27017/react'
  try {
    const conn = await mongoose.connect(DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;