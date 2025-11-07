//import json server
const jsonServer = require('json-server');

//create a server app
const server = jsonServer.create();

//create route for db.json file
const router = jsonServer.router('db.json');

//create a middleware
const middleware = jsonServer.defaults();

//create a port for running your app
const PORT = 3000;

//it has to be part of your server
server.use(middleware);
server.use(router);

//listen to the port
server.listen(PORT, ()=>{
    console.log("Server started");
    
})