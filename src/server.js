import app from "./app.js";
const PORT = process.env.PORT || 3000;

app.listen(3000, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});
