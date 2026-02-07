const sql = require("mysql2");

const connection = sql.createConnection({
  host: "localhost",
  database: "tutorconnectdatabase",
  user: "Tutorian",
  password: "quantum",
  port: 3306
});

connection.connect((error) => {
    if ( error ){
        console.log(`${error}`);
        return;
    }
    console.log("Successful connection");
});



module.exports = connection;
