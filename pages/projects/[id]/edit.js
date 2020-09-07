import React from 'react';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/BasePage';
import withAuth from '../../../hoc/withAuth';
import {useRouter} from 'next/router';
import { useGetProject } from '../../../actions/projects';
import ProjectForm from '../../../components/ProjectForm';
import { Row, Col } from 'reactstrap';

const ProjectEdit = ({user}) => {
  const router = useRouter();
  const { data } = useGetProject(router.query.id);

  return (
    <>
      <BaseLayout user={user} loading={false}>
        <BasePage header="Project Edit">
          <Row>
            <Col md="8 ">
              { data && 
                <ProjectForm initialData={data}/>
              }
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default withAuth(ProjectEdit)('admin'); 
 