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

export const getServerSideProps = async ({query}) => {
  const json = await new ProjectApi().getById(query.id);
  const project = json.data;

  return {props: {project}};
}

export default Project; 
