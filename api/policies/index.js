const axios = require('axios');

const serviceUrl = 'http://localhost:8080/graphql';

module.exports = {
  getAll: function policies() {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query { 
            policies {
              _modifiedAt { _nanoseconds _seconds}
              _publishedAt { _nanoseconds _seconds }
              content
              title
            } 
          }
        `,
      },
    });
  },
  getOne: function policy(query) {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query {
            policy(title: "${query.title}") {
              _modifiedAt { _nanoseconds _seconds}
              _publishedAt { _nanoseconds _seconds }
              content
              title
            }
          }
        `,
      },
    })
  }
};