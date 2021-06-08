const SocketHandler = require('../../lib/ActionHandler');
      
// ==============================================================
// Get Connection
// ==============================================================
module.exports = class extends SocketHandler {
  execute(eventKey, req, res) {
    const connection = req.getConnection();
    const socket = connection.getSocket();
    //---------------------------------

    socket.emit('connection', connection.serialize())

    //---------------------------------
    this.next(eventKey, req, res);
  }
}
