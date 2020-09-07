import axios from 'axios';
import { useApiHandler } from '../actions/index';
import useSWR from 'swr';
import { fetcher } from './index';

const createProject = (data) => {
  return axios.post('/api/v1/projects', data)
}

export const useCreateProject = () => {
   return useApiHandler(createProject);
}

export const useGetProject = (id) => {
  const {data, error, ...rest} = useSWR(id ? `/api/v1/projects/${id}` : null, fetcher);
  return {data, error, loading: !data && !error, ...rest};
}

