import axios from 'axios';

class ProjectApi {

  constructor(accessToken) {

    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = 'http://localhost:5000/api/v1' + '/projects';
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`)
  }

  createProject(data) {
    return axios.post(this.apiUrl, data, this.config);
  }
}

export default ProjectApi;