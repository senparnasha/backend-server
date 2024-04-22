const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("GET Request Called")
})
 
app.post('/post',
    (req, res) => {
        console.log(req.body);
        res.send("POST Request Called")
        
    })

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));