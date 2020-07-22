import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Project extends React.Component {

  render() {
    const {project} = this.props;
    return (
      <>
        <BaseLayout>
          <h1>Single Portfolio</h1>
        </BaseLayout>
      </>
    )
  }

}

export default Project; 
