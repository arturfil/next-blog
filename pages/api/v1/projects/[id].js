import ProjectApi from '../../../../lib/api/projects';

const handleProject = async (req, res) => {
  const json = await new ProjectApi().getById(req.query.id);
  return res.json(json.data);
}

export default handleProject;