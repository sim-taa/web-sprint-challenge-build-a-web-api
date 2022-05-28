// Write your "projects" router here!
const express = require("express");
const { projectToBody } = require("../../data/helpers/mappers");
const Projects = require("./projects-model");
const colors = require("colors");
const router = express.Router();

/*1 done*/ router.get("/", (req, res) => {
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
// /*2 done?*/router.get('/:id', async (req, res) => {
//     try {
//         const project = await Project.get(req.params.id);
//         console.log('message from projects', project);
//         res.json(project.id);
//         // if (!post) {
//         //     res.status(404).json({
//         //         message: 'The post with the specified ID does not exist',
//         //     })
//         // } else {
//         //   res.json(project);
//         // }
//     } catch (err) {
//         // res.status(404).json({
//         //     message: "The project with the specified information could not be found.",
//         //     err: err.message,
//         //     stack: err.stack,
//         // })

//     }
// })
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Projects.get(id);
    //   console.log(colors.blue(project));
    if (project == null) {
      return res.status(404).json({ message: "does not exist" });
    }
    res.status(200).json({ project, id: project.id });
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
  //   Projects.get(id)
  //     .then((data) => {
  //       res.status(200).json({data, id: data.id});
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ message: "status 500" });
  //     });
});

/*3*/ router.post("/", (req, res) => {});
/*5*/ router.delete("/:id", (req, res) => {});
/*4*/ router.put("/:id", (req, res) => {});

module.exports = router;
