import axios from 'axios';

class PortfolioApi {

  getAll() {
    return axios.get('http://localhost:5000/api/v1/projects')
  }
}

export default PortfolioApi;