import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import ProjectApi from '../../lib/api/projects';
import { useGetUser } from '../../actions/user';
import { useDeleteProject } from '../../actions/projects';
import { Row, Col, Button} from 'reactstrap';
import ProjectCard from '../../components/ProjectCard';
import { isAuthorized } from '../../utils/auth0'

const Projects = ({projects}) => {
  const router = useRouter();
  const [deleteProject, {data, error}] = useDeleteProject();
  const {data: userData, loading: userLoading} = useGetUser();

  const _deleteProject = async (e, projectId) => {
    e.stopPropagation()
    const isConfirm = confirm('Are you sure you want to Delete it?');
    if (isConfirm) await deleteProject(projectId)
  }

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
                    <ProjectCard project={project}>
                      { userData && isAuthorized(userData, ('admin')) && 
                        <>
                          <Button color="warning" className="mr-2" onClick={(e) => {
                            e.stopPropagation();
                            router.push('/projects/[id]/edit', `/projects/${project._id}/edit`)
                          }}>Edit</Button>
                          <Button onClick={(e) => _deleteProject(e, project._id)} color="danger">Delete</Button>
                        </>
                      }
                    </ProjectCard>
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