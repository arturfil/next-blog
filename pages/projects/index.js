import React, {useEffect, useState} from 'react';
import Link  from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetPosts } from '../../actions/index';
import { useGetUser } from '../../actions/user';

const Projects = () => {
  const {data: userData, loading: userLoading} = useGetUser();
  const {data, error, loading} = useGetPosts();
  const renderPosts = (posts) => {
    return posts.map(post => (
        <li key={post.id} style={{fontSize: '20px'}}>
          <Link as={`/projects/${post.id}`} href="/projects/[id]">
            <a>{post.title}</a>
          </Link>
        </li>
      )
    ) 
  }

    return (
      <>
        <BaseLayout user={userData} loading={userLoading}>
          <BasePage>
            { !loading &&
              <h1 className="customClassFromFile">Projects Page</h1>
            }
            { loading &&
              <h1 className="">Loading ...</h1>
            }
            { data &&
              <ul>
                {renderPosts(data)}
              </ul>
            }
            { error &&
              <div className="alert alert-danger">
                {error.message}
              </div>
            }
          </BasePage>
        </BaseLayout>
      </>
    )
}

export default Projects;