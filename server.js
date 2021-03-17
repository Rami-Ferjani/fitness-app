/*const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);*/
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const persons = require("./routes/api/persons.js");
const app = express();
const path = require("path");

//Bodyparser Middleware
app.use(bodyParser.json());

//db config
const db = require("./config/keys").mongoURI;

//Connnect to MOngo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected ..."))
  .catch((err) => console.log(err));
//use Routes

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use("/api/persons", persons);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
