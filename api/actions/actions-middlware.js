const Action = require("./actions-model");

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
};
