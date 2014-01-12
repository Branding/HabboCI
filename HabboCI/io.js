var Application = require('./app');

module.exports = function(Io){
	
	Application.Logger('SocketIO routers loaded!', 'debug');
		
	Io.sockets.on('connection', function(Handshake){
		
		Handshake.on('Mundoci::AlfaNotify', function(data){
			Io.sockets.emit('Mundoci::Mandow', { username: data['userNotify'] } );
		});
	});
};