import axios from 'axios';

class ProjectApi {

  constructor() {
    this.apiUrl = process.env.PORTFOLIO_API_URL + '/projects';
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`)
  }

  createProject(data) {
    return axios.post(this.apiUrl, data);
  }
}

export default ProjectApi;