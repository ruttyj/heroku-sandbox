module.exports = class Person
{
  static STATUS_CONNECTED = 'connected';
  static STATUS_DISCONNECTED = 'disconnected';

  static TYPE_HOST = 'host';
  static TYPE_MEMBER = 'member';

  constructor(data)
  {
    this.mId = data.id || null;
    this.mType = data.type || null;
    this.mStatus = data.status || null;
    this.mName = data.name || "";
    this.mConnection = null;
    this.mIsReady = false;
  }

  // Id ---------------------------------
  getId()
  {
    return this.mId;
  }

  setId(value)
  {
    this.mId = value;
  }


  

  // Type ------------------------------
  getType()
  {
    return this.mType;
  }

  setType(value)
  {
    this.mType = value;
  }


  // Name ------------------------------
  getName()
  {
    return this.mName;
  }

  setName(value)
  {
    this.mName = value;
  }

  // Is Ready ------------------------------
  getIsReady()
  {
    return this.mIsReady;
  }

  setIsReady(value)
  {
    this.mIsReady = true;
  }

  // Connection --------------------------
  getStatus()
  {
    return this.mStatus;
  }

  setStatus(value)
  {
    this.mStatus = value;
  }

  connect(connection)
  {
    connection.setPersonId(this.getId());
    this.setStatus(Person.STATUS_CONNECTED);
    this.mConnection = connection;
  }

  getConnection()
  {
    return this.mConnection;
  }

  disconnect()
  {
    const connection = this.getConnection();
    connection.setPersonId(null);
    this.setStatus(Person.STATUS_DISCONNECTED);
    this.mConnection = null;
  }


  // Socket ------------------------------
  getSocket()
  {
    const connection = this.getConnection();
    if (connection) {
      return connection.getSocket();
    }
    return null;
  }

  hasSocket()
  {
    return this.getSocket() !== null;
  }

  getSocketId()
  {
    const connection = this.getConnection();
    if (connection) {
      const socket = connection.getSocket();
      if (socket) {
        return socket.id;
      }
    }
    return null;
  }

  emit(eventType, payload)
  {
    const socket = this.getSocket();
    if (socket) {
      socket.emit(eventType, payload);
      return true;
    }
    return false;
  }
  
  
  
  // Serialize ------------------------------
  serialize()
  {
    return {
      id:         this.mId,
      status:     this.mStatus, // connected
      type:       this.mType,   // host | memeber | spectator?maybe
      isReady:    this.mIsReady,
      name:       this.mName,
      socketId:   this.getSocketId(),
    }
  }
}