
require('dotenv').config()

const connectToDatabase = require('./src/database/connect')

connectToDatabase()

require('./src/server/server')
