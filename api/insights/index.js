const axios = require('axios');

const serviceUrl = 'http://localhost:8080/graphql';

module.exports = {
  getAll: function insights() {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query { 
            insights {
              id
              _publishedAt { _seconds _nanoseconds }
              authorId
              desc
              media { height source type }
              meta { featured size { xs sm md lg xl } }
              title
            } 
          }
        `,
      },
    });
  },
  getOne: function insight(query) {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query {
            insight(id: "${query.id}") {
              id
              _publishedAt { _seconds _nanoseconds }
              authorId
              content
              media { source type }
              title
            }
          }
        `,
      },
    })
  },
  getNews: function insights() {
    return axios({
      url: serviceUrl,
      method: 'post',
      data: {
        query: `
          query {
            insights(category: "corporate news") {
              id
              _publishedAt { _seconds _nanoseconds }
              authorId
              content
              desc
              media { source type }
              title
            }
          }
        `,
      },
    })
  }
};