const express = require("express");
const Action = require("./actions-model");

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
/* TEST 17, 18 */
router.get("/:id", (req, res) => {});
/* TEST 19, 20, 21 */
router.post("/", (req, res) => {});
/* TEST 25,26 */
router.delete("/:id", (req, res) => {});
/* TEST 22,23,24 */
router.put("/:id", (req, res) => {});

module.exports = router;
