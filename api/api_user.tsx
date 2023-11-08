import { gql } from '@apollo/client';


// get info page
const GET_INFO = gql`
    query GET_INFO {
        generalSettings {
        url
    }
  }
`;

export default GET_INFO;