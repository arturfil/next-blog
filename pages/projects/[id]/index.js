import React from 'react';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/BasePage';
import ProjectApi from '../../../lib/api/projects';
import {useGetUser} from '../../../actions/user';

const Project = ({project}) => {
  const {data: userData, loading: userLoading} = useGetUser();

  return (
    <>
      <BaseLayout user={userData} loading={userLoading}>
        <BasePage header="Single Portfolio">
          {
            JSON.stringify(project)
          }
        </BasePage>
      </BaseLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  const json = await new ProjectApi().getAll();
  const projects = json.data;

  const paths = projects.map(project => {
    return {
      params: {id: project._id}
    }
  })

  return {paths, fallback: false};
}

export const getStaticProps = async ({params}) => {
  const json = await new ProjectApi().getById(params.id);
  const project = json.data;
  return { props: {project}};
}

export default Project; 
