const axios = require('axios')

// /documents/search
// https://repo-name.prismic.io/api/v2/documents/search?ref=WUfdIigAACgAe7f9

let r = axios
  // /documents/search
  .get('https://fivedegreechange.cdn.prismic.io/api/v2/documents/search', {
    params: {
      ref: 'X2ClJhEAACIAfVxE',
      pageSize: 100
    }
  })
  .then((res) => { 
    // console.log(res.data.results);
    let arr = []
    res.data.results.map((item) => { 
      if (item.type === 'page') arr.push('/page/' + item.uid)
    }) 
    console.log(arr);
    
  })
  .catch((error) => {
    console.log(error);
  })
