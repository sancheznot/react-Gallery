const app = require("./app.js");
require("./config")
require('./database.js')

// ------------- DEFINE PORT

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})

