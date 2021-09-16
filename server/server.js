//Express and db connection
const express = require("express");
const db = require("./config/connection");
const path = require("path");
//Apollo typeDefs and resolvers
const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

//Port number and app
const PORT = process.env.PORT || 3001;
const app = express();

//Apollo server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

//Apollo Middleware
server.applyMiddleware({ app });
//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Include images later!!!!!!!
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
