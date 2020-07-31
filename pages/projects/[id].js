import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import { useGetPostById } from '../../actions';
import {useGetUser} from '../../actions/user';

const Project = () => {
  const router = useRouter();
  const {data: project, error, loading} = useGetPostById(router.query.id)
  const {data: userData, loading: userLoading} = useGetUser();

  return (
    <>
      <BaseLayout user={userData} loading={userLoading}>
        <BasePage>
        { loading && <h1>Loading...</h1>}
        { error && <div className="alert alert-danger">{error.message}</div>  }
        { project &&
          <>
            <h4 style={{fontSize: '40px'}}>{project.title}</h4>
            <p style={{fontSize: '25px'}}>{project.body}</p>
          </>
        } 

        </BasePage>
      </BaseLayout>
    </>
  )
}

export default Project; 
