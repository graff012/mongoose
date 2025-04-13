import express from "express";
import "dotenv/config";
import Routes from "./routes/routes.js";
import initDb from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", Routes());

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || "INTERNAL SERVER ERROR" });
});

const bootstrap = async () => {
  try {
    await initDb();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

bootstrap();
