import React from 'react';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/withAuth';
import BaseLayout from '../../components/layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';
import { useCreateProject } from '../../actions/projects';

const ProjectNew = ({user, loading: userLoading}) => {
  const [createProject, {data, loading, error}] = useCreateProject();

  const _createProject = (data) => {
    createProject(data);
  }

  return (
    <>
      <BaseLayout user={user} loading={userLoading}>
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