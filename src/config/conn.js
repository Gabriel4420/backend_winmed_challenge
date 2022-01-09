const mongoose = require('mongoose')
require('dotenv/config')
class Connection {
  constructor() {
    this.DbConnectionMongoDB()
  }

  DbConnectionMongoDB() {
    this.mongoDBConnection = mongoose
      .connect(`${process.env.DB_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connection established successfully with MongoDB ')
      })
      .catch((error) => {
        console.log(`Error while establishing a connection >> ${error} `)
      })
  }


}

module.exports = new Connection()
