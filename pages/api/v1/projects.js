import axios from 'axios';
import ProjectApi from '../../../lib/api/projects';

const createProject = async (req, res) => {
  try {
    const data = req.body;
    await new ProjectApi().createProject(data);
    return res.json({message: 'Project was created'});
  } catch (error) {
    return res.status(error.status||400).end(error.message);
  }
}

export default createProject;