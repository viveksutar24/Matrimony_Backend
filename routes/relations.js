let express = require("express");
let mongoose = require("mongoose");
let Relation = require("../models/Relation");

let router = express.Router();

router.post("/", (req, res) => {
  let body = req.body;
  let object = new Relation(body);
  object
    .save()
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.put("/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  Relation.findByIdAndUpdate(id, body)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/", (req, res) => {
  Relation.find()
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Relation.findById(req.params.id)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Relation.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

module.exports = router;
