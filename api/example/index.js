const axios = require('axios');

module.exports = function test() {
  return axios({
    url: 'http://localhost:8080/graphql',
    method: 'post',
    data: {
      query: `
        query { test }
      `
    }
  });
};