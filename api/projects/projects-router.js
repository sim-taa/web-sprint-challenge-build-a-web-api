// Write your "projects" router here!
const express = require("express");
const { projectToBody } = require("../../data/helpers/mappers");
const Projects = require("./projects-model");
const colors = require("colors");
const {newProjectPayloadValidation} = require("./projects-middleware");
const router = express.Router();

/* TEST 1,2 DONE */ 
router.get("/", (req, res) => {
  Projects.get()
    .then((found) => {
      res.json(found);
    })
    .catch((err) => {
      res.status(500).json({
        message: "The projects information could not be retrived.",
        err: err.message,
        stack: err.stack,
      });
    });
});

/* TEST 3,4 */
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Projects.get(id);
    if (project == null) {
      return res.status(404).json({ message: "does not exist" });
    }

    res.status(200).json({
      name: project.name,
      description: project.description,
      completed: project.completed,
    });
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
});

/* TEST 5,6,7 DONE */ 
router.post("/", newProjectPayloadValidation, async (req, res) => {
try {
    const project = req.body;
    const newProject = await Projects.insert(project) 
    res.status(201).json(newProject)   
} catch (error) {
    res.status(500).json({ message: "status 500" });
}
});

/*5*/ router.delete("/:id", (req, res) => {});
/*4*/ router.put("/:id", (req, res) => {});

module.exports = router;
