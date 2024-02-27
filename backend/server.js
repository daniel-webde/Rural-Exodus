const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app in the 'frontend/build' folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Define API routes if needed
// Example:
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'API endpoint reached' });
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend", "index.html"));
// });

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
