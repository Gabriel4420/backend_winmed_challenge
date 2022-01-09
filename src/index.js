const app = require('./app')

require('./config/conn')

app.listen(process.env.PORT || 8080)



