const express = require("express");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./graphql/schema.js");
const dbConfig = require("./config");

const port = process.env.PORT || "5000";
const app = express();

// middlewares

// allow cross-origin resource sharing
app.use(cors());

// connect express to graphql
app.use(
  "/graphql",
  graphqlHttp({
    schema: schema,
    graphiql: true
  })
);

// connect to the database
mongoose.connect(
  dbConfig.url,
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.listen(port, () => {
  console.log(`==> Server is running on port ${port}`);
});
