import axios from 'axios';
import { useApiHandler } from '../actions/index';
import useSWR from 'swr';
import { fetcher } from './index';

const createProject = (data) => {
  return axios.post('/api/v1/projects', data)
}

const updateProject = (id, data) => axios.patch(`/api/v1/projects/${id}`, data);

export const useCreateProject = () => {
   return useApiHandler(createProject);
}

export const useUpdateProject = () => useApiHandler(updateProject);

export const useGetProject = (id) => {
  const {data, error, ...rest} = useSWR(id ? `/api/v1/projects/${id}` : null, fetcher);
  return {data, error, loading: !data && !error, ...rest};
}

