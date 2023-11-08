import { gql } from '@apollo/client';


// get info page
const GET_INFO = gql`
    query GET_INFO {
        generalSettings {
        url
    }
  }
`;


// login user
const LOGIN_USER = gql`
    mutation LOGIN_USER($username: String!, $password: String!) {
        login(input: {username: $username, password: $password}) {
            authToken
            user {
                id
                name
                username
                email
            }
        }
    }
`;

export default {
    GET_INFO,
    LOGIN_USER
}