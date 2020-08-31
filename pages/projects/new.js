import React from 'react';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/withAuth';
import BaseLayout from '../../components/layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';
import { createProject } from '../../actions/projects';

const ProjectNew = ({data, loading: userLoading}) => {

  const _createProject = (data) => {
    createProject(data);
  }

  return (
    <>
      <BaseLayout user={data} loading={userLoading}>
        <BasePage header="Create New Project">
          <Row>
            <Col md="8">
              <ProjectForm onSubmitData={_createProject}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default withAuth(ProjectNew)('admin');