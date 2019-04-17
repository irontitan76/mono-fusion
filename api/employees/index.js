const axios = require('axios');

const serviceUrl = 'http://localhost:8080/graphql';

module.exports = {
  getAll: function employees() {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query { 
            employees {
              birth { address date { _seconds _nanoseconds } city state }
              contact { address city state phone }
              name { preferred last }
              profile { media { source type } title }
            } 
          }
        `,
      },
    });
  },
  getOne: function employee(query) {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query {
            employee(id: "${query.id}") {
              name { preferred last }
            }
          }
        `,
      },
    })
  }
};