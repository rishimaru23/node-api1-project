const server = require('./api/server');

const port = 4000;

// START YOUR SERVER HERE
console.log('hey you!')

server.listen(port, () => {
    console.log('listening on', port)
})