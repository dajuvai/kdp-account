export const fetchData = (url) => {
  return fetch(url)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return {
          response: false
        };
      }
    }).catch(() => 'connection lost');
};

export const postData = (url, data) => {
  return fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
};