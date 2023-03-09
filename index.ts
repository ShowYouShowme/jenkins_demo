import express = require('express');
import bodyParser = require("body-parser");
const port = 5000;
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.send('hello world!');
});

app.get('/api/getUsers', (req, res)=>{
    res.json([
        {
            name : 'terry',
            age  : 25
        },
        {
            name : 'marry',
            age  : 18
        },{
            name : 'vice',
            age  : 39
        }
    ])
});



app.listen(port, '0.0.0.0', ()=>{
    console.log(`Example app listening on port ${port}`);
});