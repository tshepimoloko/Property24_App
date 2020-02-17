const MMS = require('mongodb-memory-server');

const MongoMemoryServer = MMS.MongoMemoryServer;
const mongod = new MongoMemoryServer({
  instance: {
    port: 27017,
  }
});

(async function() {
  const uri = await mongod.getUri();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  mongod.getInstanceInfo();
})();
