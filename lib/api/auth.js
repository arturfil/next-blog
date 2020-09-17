import axios from 'axios';

class AuthApi {
  constuctor(accessToken) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = 'http://localhost:5000/api/v1/users';
  }

  signIn(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

  
}