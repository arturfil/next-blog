import axios from 'axios';

export const createProject = (data) => {
  return axios.post('/api/v1/projects', data)
}