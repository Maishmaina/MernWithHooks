import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./congif/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
//instantiate
dotenv.config();
connectDB();
const app = express();

//body parse to access req.body for post request
app.use(express.json());

//mount route to server
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

//get PAYPAL CLIENT ID
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//error middlwares
//for 404 error
app.use(notFound);
//500 error
app.use(errorHandler);
//specify port
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server on port ${PORT}`.yellow.bold)
);
