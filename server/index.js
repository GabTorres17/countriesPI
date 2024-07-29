const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { DB_PORT } = process.env;
const PORT = DB_PORT || 3001;

//para sincronizar cualquier cambio se cambia el force a true, y luego a false de vuelta para que no se reinicie cada vez
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
