import React from 'react';
import axios from 'axios';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';

const Project = ({project}) => {
  return (
    <>
      <BaseLayout>
        <BasePage>
          <h4 style={{fontSize: '40px'}}>{project.title}</h4>
          <p style={{fontSize: '25px'}}>{project.body}</p>
        </BasePage>
      </BaseLayout>
    </>
  )
}

Project.getInitialProps = async ({query}) => {
  let post = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    post = res.data;
  } catch (e) {
    console.error(e);
  }
  return {project: post }
}

export default Project; 
