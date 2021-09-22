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
    quantity: String
    price: String
    category: [Category]
  }

  type User {
    _id: ID
    name: String
    password: String
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    products(name: String): [Product]
    product(_id: ID!): Product
    users: [User]
    user(name: String!): User
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
      price: String!
      quantity: String!
    ): Product
    updateProduct(_id: ID!, productInput: ProductInput): Product
    login(name: String!, password: String!): Auth
    deleteProduct(_id: ID!): Product
  }
`;
module.exports = typeDefs;
