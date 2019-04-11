const axios = require('axios');

module.exports = function insights() {
  return axios({
    url: 'http://localhost:8080/graphql',
    method: 'post',
    data: {
      query: `
        query { 
          insights { 
            _publishedAt { _nanoseconds }
            desc
            media { height source type }
            meta { featured size { xs sm md lg xl } }
            slug
            title
          } 
        }
      `
    }
  });
};