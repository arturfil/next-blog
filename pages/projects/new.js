import React from 'react';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/withAuth';
import BaseLayout from '../../components/layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';

const ProjectNew = ({data, loading: userLoading}) => {

  const createProject = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <>
      <BaseLayout user={data} loading={userLoading}>
        <BasePage header="Create New Project">
          <Row>
            <Col md="8">
              <ProjectForm onSubmitData={createProject}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default withAuth(ProjectNew)('admin');