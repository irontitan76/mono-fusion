const gql = require('graphql-tag');

module.exports = {
  getAll: gql`
    query { 
      allEmployees {
        birth { address date city state }
        contact { address city state phone }
        name { preferred last }
        profile { media { source type } title }
      } 
    }
  `,
  getExecutives: gql`
    query allEmployees($level: Int!) {
      allEmployees(filter: { level: $level }) {
        id
        name { preferred last }
        profile { level media { source type } title }
      }
    }
  `,
  getOne: gql`
    query {
      employee {
        name { preferred last }
      }
    }
  `,
};