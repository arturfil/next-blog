import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetData } from '../../actions';
import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const {data: project, error, loading} = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);

  return (
    <>
      <BaseLayout>
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
