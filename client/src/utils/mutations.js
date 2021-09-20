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