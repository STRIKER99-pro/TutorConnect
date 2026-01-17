const sql = require("mysql2");

const connection = sql.createConnection({
    host: "localhost",
    database: "TutorConnectDatabase",
    user: "Tutorian",
    password: "quantum",
    ssl: false
});

connection.connect((error) => {
    if ( error ){
        console.log("There is an error");
        return;
    }
    console.log("Successful connection");
});



module.exports = connection;
