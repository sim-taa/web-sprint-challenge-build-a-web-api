const express = require("express");
const {
  checkActionIdExists,
  newActionPayloadValidation,
} = require("../actions/actions-middlware");
const Action = require("./actions-model");
const { response } = require("express");
const { getProjectActions } = require("../projects/projects-model");
const {
  updateProjectPayloadValidation,
} = require("../projects/projects-middleware");
const router = express.Router();

/*  TEST 15,16 DONE */ router.get("/", (req, res) => {
  Action.get()
    .then((found) => {
      res.json(found);
    })
    .catch((err) => {
      res.status(500).json({
        message: "The actions information could not be retrived.",
        err: err.message,
        stack: err.stack,
      });
    });
});
/* TEST 17, 18 DONE */
router.get("/:id", checkActionIdExists, async (req, res) => {
  try {
    res.status(200).json({
      project_id: req.action.project_id,
      description: req.action.description,
      notes: req.action.notes,
      completed: req.action.completed,
    });
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
});
/* TEST 19, 20, 21 DONE */
router.post("/", newActionPayloadValidation, async (req, res) => {
  try {
    const action = req.body;
    const newAction = await Action.insert(action);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ message: "status 500" });
  }
});

/* TEST 25,26 DONE */
router.delete("/:id", checkActionIdExists, async (req, res) => {
  await Action.remove(req.params.id);
  res.status(200).json({
    message: `your action ${req.action.project_id} was deleted`,
  });
});
/* TEST 22,23,24 DONE! */
router.put(
  "/:id",
  checkActionIdExists,
  newActionPayloadValidation,
  async (req, res) => {
    const updatedAction = await Action.update(req.params.id, req.body);
    res.status(200).json(updatedAction);
  }
);

module.exports = router;
