const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/v1/ip", (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      ip: req.socket.remoteAddress,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server Has been started on PORT ${PORT}`);
});
