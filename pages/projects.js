import React from 'react';
import axios from 'axios';
import Link  from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Projects = ({posts}) => {

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
            <h1 className="customClassFromFile">Projects Page</h1>
            <ul>
              {renderPosts(posts)}
            </ul>
          </BasePage>
        </BaseLayout>
      </>
    )
}

Projects.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts = res.data;
  } catch (e) {
    console.error(e);
  }
  return {posts: posts.slice(0,10)};
}

export default Projects;