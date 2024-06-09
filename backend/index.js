// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const formData=require('./data')
app.use(cors());


// API endpoint to serve JSON data
app.get("/api/formdata", (req, res) => {
  res.json(formData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
