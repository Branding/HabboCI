function ThreadsModule (config, server){

	var System  = require('os'),
		Sockets = require('socket.io');

	var Threads = {
		"Relase": "Threads",
		"Base": "22582",
		"Version": "0.0.1",
		"Status": "OK",
	};
	
	LoggerHandler('\n   Threads.JS application handler');
	LoggerHandler('Relase:' + Threads['Relase'] + ' status: ' + Threads['Status'] + ' version: ' + Threads['Version'] + ' kernel base: ' + Threads['Base']);
	LoggerHandler('Server start: environment is: ' + config['environment'] + ' Listening connection on the port: ' + config['local']['port']);
	LoggerHandler('Operating system: ' + System.type() + ' platform: ' + System.platform() + '\n');

	var SocketIO = Sockets.listen(server);

	setTimeout(function(){
		var  Io = require('./io.js')(SocketIO);
	}, 2000);
};

function LoggerHandler (append, level){

	var Colors = [
		'\033[0m',
		'\033[31m',
		'\033[34m',
	];

	switch(level){
		default:
			console.log('   ' + Colors[0] + append);
		break;

		case "error":
			return console.log('   ' + Colors[1] + '[ERROR] ' + Colors[0] + append);
		break;

		case "debug":
			return console.log('   ' + Colors[2] + '[DEBUG] ' + Colors[0] + append);
		break;
	}
};

exports.Initializer = ThreadsModule;
exports.Logger = LoggerHandler;
