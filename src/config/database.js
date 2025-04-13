import mongoose from "mongoose";

const initDb = async () => {
  try {
    const url = process.env.DB_URL;

    console.log(url);
    await mongoose.connect(url);
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

export default initDb;
