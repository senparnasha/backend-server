const express = require("express");

const app = express();
const port = 3001;

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "swiggy",
  password: "parnasha",
  port: 5432,
});
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/view/resturents", async (req, res) => {
  const text = "SELECT * FROM resturents";
 
  const resturent = await client.query(text);
  console.log(resturent.rows);
  res.send(resturent.rows)
});


app.post("/view/menu", async (req, res) => {
    const text = `SELECT * FROM menu where res_id=${req.body.res_id}`
   
    const menu = await client.query(text);
    console.log(menu.rows);
    console.log(req.body.res_id)
    
    res.send(menu.rows)

  });



app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
