class Api {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    getUserData() {
      return fetch(this._baseUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`${response.status}`));
        })
        .catch((err) => { console.log(err); });
    }
  }
  
  const api = new Api({
    baseUrl: 'http://api.infy-corp.com/react-api/test/get-user',
  });
  
  export default api;
