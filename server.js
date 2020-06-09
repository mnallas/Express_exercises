const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
