const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./server.js");
const serviceRoutes = require("./routes/serviceRoutes");
const requestRoutes = require("./routes/requestRoutes");
const memberRoutes = require("./routes/memberRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api", serviceRoutes);
app.use("/api", requestRoutes);
app.use("/api", memberRoutes);
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
