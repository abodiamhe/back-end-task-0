const express = require("express");
const env = require("dotenv")

const app = express();
env.config()

const adminRoutes = require("./routes/admin");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use("/admin", adminRoutes);

app.use((error, req, res, next) => { 
  const status = error.statusCode || 500; 
  res.status(status).json({ message: "An error occured" });
});

app.listen(process.env.PORT || 3000);
