import React from 'react';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/BasePage';
import withAuth from '../../../hoc/withAuth';
import {useRouter} from 'next/router';
import { useGetProject, useUpdateProject } from '../../../actions/projects';
import ProjectForm from '../../../components/ProjectForm';
import { Row, Col } from 'reactstrap';

const ProjectEdit = ({user}) => {
  const router = useRouter();
  const [updateProject, {data, error, loading}] = useUpdateProject();
  const { data: initialData } = useGetProject(router.query.id);

  const _updateProject = (data) => {
    updateProject(router.query.id, data);
  }

  return (
    <>
      <BaseLayout user={user} loading={false}>
        <BasePage header="Project Edit">
          <Row>
            <Col md="8 ">
              { initialData && 
                <ProjectForm 
                  onSubmitData={_updateProject} 
                  initialData={initialData  }/>
              }
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default withAuth(ProjectEdit)('admin'); 
 