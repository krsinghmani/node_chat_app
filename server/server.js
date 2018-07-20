const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

const app = express();
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
const server = http.createServer((app));
const io = socketIO(server);

// app.get(publicPath,(req,res) =>{
//     res.send('Hello!');
// })

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect',()=>{
        console.log('Disconnected from user');        
    })
    
})
server.listen(port,() => console.log(`Server is up on port ${port}`))

