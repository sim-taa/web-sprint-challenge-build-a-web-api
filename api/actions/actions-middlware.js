const Action = require("./actions-model");

function newActionPayloadValidation(req, res, next) {
  console.log(req);
  if (
    req.body.project_id &&
    req.body.description &&
    req.body.notes &&
    (req.body.completed == false || req.body.completed === true)
  ) {
    next();
  } else {
    res.status(400).json({
      message:
        "please provide a project id, description, notes, and completed status",
    });
  }
}
async function checkActionIdExists(req, res, next) {
  console.log("inside actions middleware");
  const id = req.params.id;
  const action = await Action.get(id);
  if (action == null) {
    return res.status(404).json({ message: "does not exist" });
  }
  req.action = action;
  next();
}

module.exports = {
  checkActionIdExists,
  newActionPayloadValidation,
};
