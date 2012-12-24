var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var storage = require("./storage.js");
var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandler");

if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
		process.exit(1);
	});
	
	
} else {


	storage.put("a_key", "a_value");



	var handle = {}
	handle["/"] = requestHandlers.start;
	server.start(router.route, handle, storage);
}