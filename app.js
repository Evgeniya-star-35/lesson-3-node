const express = require("express");
const morgan = require("morgan");
const app = express();
app.use((req, res, next) => {
  const start = performance.now();
  console.log(performance.now() - start);
  next();
});
//routing
app.use(morgan("tiny"));
app.use("/", require("./routes/main"));
app.use("/user", require("./routes/user"));
app.use("/weather", require("./routes/weather"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
