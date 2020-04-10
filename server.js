const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const connectToDB = require("./db");

// import dataBase
connectToDB();

// import routes
const coffeeProductRoutes = require('./routes/coffeeProduct.routes');
const teaProductRoutes = require('./routes/teaProduct.routes');
const yerbaProductRoutes = require('./routes/yerbaProduct.routes');
const machinProductRoutes = require('./routes/machinProduct.routes');
const brandRoutes = require('./routes/brand.routes');


app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", coffeeProductRoutes);
app.use("/api", teaProductRoutes);
app.use("/api", yerbaProductRoutes);
app.use("/api", machinProductRoutes);
app.use("/api", brandRoutes);



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});
app.use((req, res) => {
  res.status(404), send("404 not found");
});
