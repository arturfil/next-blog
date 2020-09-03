import React from 'react';
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/withAuth';
import BaseLayout from '../../components/layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';
import { useCreateProject } from '../../actions/projects';
import Redirect from '../../components/shared/Redirect';

const ProjectNew = ({user, loading: userLoading}) => {
  const [createProject, {data, loading, error}] = useCreateProject();

  if (data) {
    return <Redirect to="/projects"/>
  }

  return (
    <>
      <BaseLayout user={user} loading={userLoading}>
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