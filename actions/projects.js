import axios from 'axios';
import { useApiHandler } from '../actions/index';

const createProject = (data) => {
  return axios.post('/api/v1/projects', data)
}

export const useCreateProject = () => {
   return useApiHandler(createProject);
} 