import React from 'react';
import { CardBody, CardTitle, Card, Row, Col, CardHeader, CardText } from 'reactstrap';

const ProjectCard = ({project}) => {

  return (
    <Card className="portfolio-card">
      <CardHeader className="portfolio-card-header">
        {project.company}
      </CardHeader>
      <CardBody>
        <p className="portfolio-card-location">{project.location}</p>
        <CardTitle className="portfolio-card-title">{project.title}</CardTitle>
        <CardText className="portfolio-card-text">{project.description}</CardText>
      </CardBody>
    </Card>
  )
}

export default ProjectCard;