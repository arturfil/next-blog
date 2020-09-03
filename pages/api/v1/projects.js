import ProjectApi from '../../../lib/api/projects';
import auth0 from '../../../utils/auth0';

const createProject = async (req, res) => {
  try {
    const {accessToken} = await auth0.getSession(req);
    const createdProject = await new ProjectApi(accessToken).createProject(req.body);
    return res.json(createdProject.data);
  } catch (error) {
    return res.status(error.status||400).end(error.message);
  }
}

export default createProject;