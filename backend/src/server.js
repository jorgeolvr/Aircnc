const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://jorgeolvr:olvr@cluster0-cmkt2.mongodb.net/admin?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// req.query -> Acessar query params (para filtros)
// req.params -> Acessar route params (para edição, delete)

app.use(express.json());
app.use(routes);

app.listen(3333);
