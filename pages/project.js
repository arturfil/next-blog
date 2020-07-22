import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

class Project extends React.Component {

  static async getInitialProps({query}) {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
      post = res.data;
    } catch (e) {
      console.error(e);
    }
    return {project: post }
  }

  render() {
    const {project} = this.props;
    return (
      <>
        <BaseLayout>
          <h4 style={{fontSize: '40px'}}>{project.title}</h4>
          <p style={{fontSize: '25px'}}>{project.body}</p>
          
        </BaseLayout>
      </>
    )
  }

}

export default Project; 
