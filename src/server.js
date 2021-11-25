const http = require('http');
const app = require('./app');
const { connection: { port } } = require('./config')

/**
 * Create HTTP server and pass express to it 
 */
const server = http.createServer(app);


/**
 * Configure server with a specific port
 */
server.listen(port, () => console.log("server started at port " + port));



