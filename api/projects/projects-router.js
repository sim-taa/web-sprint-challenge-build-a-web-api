// Write your "projects" router here!
const express = require("express");
const { projectToBody } = require("../../data/helpers/mappers");
const Projects = require("./projects-model");
const colors = require("colors");
const {
  newProjectPayloadValidation,
  checkIdExists,
} = require("./projects-middleware");
const { response } = require("express");
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
router.get("/:id", checkIdExists, async (req, res) => {
  try {
    res.status(200).json({
      name: req.project.name,
      description: req.project.description,
      completed: req.project.completed,
    });
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
});

/* TEST 5,6,7 DONE */

router.post("/", newProjectPayloadValidation, async (req, res) => {
  try {
    const project = req.body;
    const newProject = await Projects.insert(project);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
});

/* TEST 11,12 DONE */

router.delete("/:id", checkIdExists, async (req, res) => {
  await Projects.remove(req.params.id);
  // res.status(204).end()
  res.status(200).json({
    message: `your project ${req.project.name} was deleted`,
  });
});

/* TEST 8,9,10 */

router.put(
  "/:id",
  checkIdExists,
  newProjectPayloadValidation,

  async (req, res) => {
    try {
      const updatedProject = await Projects.update(req.params.id, req.body);
      res.status(201).json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: "status 500" });
    }
  }
);

module.exports = router;
