import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import ProjectApi from '../../lib/api/projects';
import { useGetUser } from '../../actions/user';
import { Row, Col} from 'reactstrap';
import ProjectCard from '../../components/ProjectCard';

const Projects = ({projects}) => {
  const router = useRouter();
  const {data: userData, loading: userLoading} = useGetUser();

    return (
      <>
        <BaseLayout user={userData} loading={userLoading}>
          <BasePage className="portfolio-page" header="Projects">
            <Row>
              { projects.map(project => 
                  <Col 
                    md="4" 
                    key={project._id} 
                    onClick={() => {
                      router.push('/projects/[id]', `/projects/${project._id}`)
                    }}>
                    <ProjectCard project={project}/>
                  </Col>
                )
              }
            </Row>
          </BasePage>
        </BaseLayout>
      </>
    )
}

// Improved performance of page
// it will create static page with dynamic data
export const getStaticProps = async () => {
  const json = await new ProjectApi().getAll();
  const projects = json.data
  return {
    props: { projects }
  }
}

export default Projects;