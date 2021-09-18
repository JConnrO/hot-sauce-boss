const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: [Category]
  }

  type User {
    _id: ID
    name: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(name: String): [Product]
    product(_id: ID!): Product
    user: [User]
  }
  input ProductInput {
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }
  type Mutation {
    addUser(name: String!, password: String!): Auth
    addProduct(
      name: String!
      description: String!
      price: Float!
      quantity: Int!
    ): Product
    updateProduct(_id: ID!, productInput: ProductInput): Product

    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
