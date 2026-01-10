const tutorModel = require("../models/TutorModel.js")
const connection = require("../config/databaseConnect.js");

const getTutor = async (req, res) => {
    const { email, password }  = req.params;

    try {
        const [tutors] = await connection.promise().query("SELECT * FROM tutor_info");

        // search tutor with email 
        const foundTutor = tutors.find(tutor => tutor.email === email);

        if ( !foundTutor ){
            return res.status(404).json({message: "tutor not found, did not sign up"});
        }
        if ( foundTutor && foundTutor.tutor_password !== password ){
            return res.json({message: "invalid password for user"});
        }

        return res.json({message: "Successful login"});
    }
    catch(error){
        res.status(500).json({message: "error getting email", error: error.message});
    }
};


module.exports = { getTutor } 