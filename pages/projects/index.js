import React, {useEffect, useState} from 'react';
import Link  from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetData } from '../../actions';


const Projects = () => {

  const {data, error, loading} = useGetData('/api/v1/posts');
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
        <BaseLayout>
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