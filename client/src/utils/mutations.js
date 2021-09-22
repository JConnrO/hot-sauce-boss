import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $password: String!) {
    addUser(name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $quantity: Int!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      quantity: $quantity
    ) {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productData: productInput!) {
    updateProduct(productData: $productData) {
      _id
      name
      addProduct {
        name
        description
        quantity
        price
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      _id
      name
      addProduct {
        name
        description
        quantity
        price
      }
    }
  }
`;
