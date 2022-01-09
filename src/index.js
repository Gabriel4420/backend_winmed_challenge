const app = require('./app')

require('./config/conn')

app.listen(process.env.PORT || 3001)



