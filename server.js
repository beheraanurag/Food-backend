import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
import express from "express";
import connectDB from "./db.js";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.route.js";
import FoodRouter from "./routes/food.route.js";
import TableRouter from "./routes/table.route.js";
import ContactRouter from "./routes/contact.route.js";
import cors from "cors";

const dnsServers = (process.env.DNS_SERVERS || "8.8.8.8,8.8.4.4")
  .split(",")
  .map((server) => server.trim())
  .filter(Boolean);

if (dnsServers.length > 0) {
  dns.setServers(dnsServers);
}

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://food-frontend-fglm.vercel.app/",
  credentials: true,
}));

app.use("/api/auth", UserRouter);
app.use("/api/food", FoodRouter);
app.use("/api/table", TableRouter);
app.use("/api/contact", ContactRouter);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});