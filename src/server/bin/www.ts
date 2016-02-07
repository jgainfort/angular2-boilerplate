/**
 * Module dependencies.
 */

import app = require('../app');
import debugModule = require('debug');
import http = require('http');

var debug: debugModule.IDebugger = debugModule('angular2-boilerplate:server');

/**
 * Get port from environment and store in Express.
 */

var port: any = normalizePort(process.env.PORT || '3300');
app.set('port', port);

/**
 * create HTTP server
 */

var server: http.Server = http.createServer(app);

/**
 * listn on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string): any {
    var port: number = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error: any): void {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind: any = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * event listener for HTTP server "listening" event
 */

function onListening(): void {
    var addr: any = server.address();
    var bind: any = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
