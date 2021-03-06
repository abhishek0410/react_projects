const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  text: String,
  complete: Boolean
});
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  create
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose
  .connect("mongodb://localhost:27017")
  .then(() =>
    server.start(() => console.log("Server is running on localhost:4000"))
  );
// ... or using `require()`
