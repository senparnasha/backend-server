const express = require("express");
const userRoute=require("./routes/userRoute")
const resturentsRoute=require("./routes/resturentsRoute")

const app = express();
const port = 3001;



app.use(express.json());

app.use("/user", userRoute)
app.use("/resturent", resturentsRoute)



app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);


// app.use(express.urlencoded({ extended: true }));

// app.get("/view/resturents", async (req, res) => {
//   const text = "SELECT * FROM resturents";
 
//  e
//   console.log(resturent.rows);
//   res.send(resturent.rows)
// });


// app.post("/view/menu", async (req, res) => {
//     const text = `SELECT * FROM menu where res_id=${req.body.res_id}`
   
//     const menu = await client.query(text);
//     console.log(menu.rows);
//     console.log(req.body.res_id)
    
//     res.send(menu.rows)

//   });

    
// Create User//









