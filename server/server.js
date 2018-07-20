const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname,'../public');

const app = express();
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

// app.get(publicPath,(req,res) =>{
//     res.send('Hello!');
// })
app.listen(port,() => console.log(`Server is on port ${port}`))

