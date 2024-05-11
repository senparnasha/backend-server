const express = require("express");
const client = require("../config");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.get("/view/all", async (req, res) => {
  const text = "SELECT * FROM resturents";
  const resturent = await client.query(text);

  res.send(resturent);
});

router.post("/create", async (req, res) => {
  // name & ph no exist or not ???

  const similarResturentNameQuery = `SELECT name FROM resturents where resturents.name='${req.body.name}'`;
  const resturentName = await client.query(similarResturentNameQuery);
  const similarResturentPhnNumQuery = `SELECT phn_no FROM resturents where resturents.phn_no='${req.body.phn_no}'`;
  const resturentPhnNumber = await client.query(similarResturentPhnNumQuery);

  if (resturentName.rowCount > 0) {
    console.log("similar name");
    res.status(400).send({ Error: "similar name" });
  } else if (resturentPhnNumber.rowCount > 0) {
    res.status(400).send({ Error: "similar Phone Number" });
  } else {
    const newId = uuidv4();
    const resturentRegister = `INSERT INTO resturents VALUES ('${newId}','${req.body.name}','${req.body.address}','${req.body.phn_no}','${req.body.costing}')`;
    const register = await client.query(resturentRegister);
    res.send(register);
  }
});








router.post("/delete", async (req, res) => {
  try {
    if (req.body.id == "") {
      res.status(404).send({
        success: false,
        message: "resturent id should not be empty",
        data: {},
      });
    } else {
      const deleteData = `DELETE FROM resturents WHERE resturents.id='${req.body.id}'`;
      const deleteRestro = await client.query(deleteData);
      console.log(deleteRestro.rowCount);
      if (deleteRestro.rowCount > 0) {
        res.status(200).send({
          success: true,
          message: "Resturent Deleted Successfully",
          data: {},
        });
      } else {
        res.status(404).send({
          success: false,
          message: "No resturent found for this id",
          data: {},
        });
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
      data: {
        type: error.name,
      },
    });
  }
});









router.post("/menu", async (req, res) => {
  const text = `SELECT * FROM menu where res_id=${req.body.res_id}`;
  const menu = await client.query(text);

  res.send(menu.rows);
});

module.exports = router;
