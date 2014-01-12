/*

  Copyright 2013 - 2014 (C) All rights reserved
  This program is private: you can not redistribute or sell.
  
  Threads is a application for the game Mundoci and use the latest technologies that are on the web.
  Powered by: MettoK

*/    
  
var Config = require('./Settings/config'),
    Server = require('http').createServer().listen(Config['local']['port']),
    SyS    = require('os');

    Mundoci = require('./HabboCI/app');
    Mundoci.Initializer(Config, Server);

setInterval(function(){
    Mundoci.Logger('System timestamp: ' + SyS.uptime(), 'debug');
    Mundoci.Logger('System CPU load: ' + SyS.loadavg()[0], 'debug');
    Mundoci.Logger('System CPU total: ' + SyS.totalmem(), 'debug');
}, 50000);