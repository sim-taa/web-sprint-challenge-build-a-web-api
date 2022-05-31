const Projects = require("./projects-model")

// add middlewares here related to projects
function newProjectPayloadValidation (req, res, next) {
    if (req.body.name && req.body.description) {
        next()
    }else{
        res.status(400).json({message:"please provide a name and description"});
    }
}

async function checkIdExists (req, res, next) {
    const id = req.params.id;
    const project = await Projects.get(id);
    if (project == null) {
      return res.status(404).json({ message: "does not exist" });
    }
    req.project = project;
    next()

}
module.exports = {
    newProjectPayloadValidation,
    checkIdExists
}