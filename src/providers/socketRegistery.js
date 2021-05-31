const SocketRegistry = require('../lib/Registry');
      
// Connection type  =============================================
const GetConnection     = require('../handlers/Connection/Get');
const GetConnectionType = require('../handlers/Connection/GetType');
const SetConnectionType = require('../handlers/Connection/SetType');

// Person =======================================================
const RegisterPerson    = require('../handlers/Person/Register');
const RequireRegistered = require('../handlers/Person/RequireRegistered');
const UnregisterPerson  = require('../handlers/Person/Unregister');

// Rooms ========================================================
const RequireConnectedToRoom     = require('../handlers/Room/RequireConnectedToRoom');
const JoinRoom          = require('../handlers/Room/Join');
const ListRooms         = require('../handlers/Room/List');
const LeaveRoom         = require('../handlers/Room/Leave');
const ListPeopleInRoom  = require('../handlers/Room/ListPeople');

// Chat =========================================================
const SendMessage           = require('../handlers/Room/Chat/Message');

const socketRegistry = new SocketRegistry();
// connection
socketRegistry.registerPublic('get_connection',       new GetConnection());

socketRegistry.registerPublic('get_connection_type',  new GetConnectionType());
socketRegistry.registerPublic('set_connection_type',  new SetConnectionType());

// person
socketRegistry.registerPublic('register_person',      new RegisterPerson());
socketRegistry.registerPublic('unregister_person',    new RequireRegistered(new UnregisterPerson()));

// room
socketRegistry.registerPublic('join_room',            new JoinRoom());
socketRegistry.registerPublic('get_room_list',        new ListRooms());
socketRegistry.registerPublic('leave_room',           new RequireConnectedToRoom(new LeaveRoom()));
socketRegistry.registerPublic('list_people_in_room',  new RequireConnectedToRoom(new ListPeopleInRoom()));

// chat
socketRegistry.registerPublic('message',  new RequireConnectedToRoom(new RequireRegistered(new SendMessage())));


module.exports = socketRegistry;
