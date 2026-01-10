// const StudentModels = require("../models/StudentModel.js");
const connection = require("../config/databaseConnect.js")

const getStudent = async (req, res) => {
    const { email, password } = req.params;
    
    try {
        // getting all students from the database
        const [students] = await connection.promise().query("SELECT * FROM student_info")

        const foundStudent = students.find(student => student.email === email)

        if ( !foundStudent ){
            return res.status(404).json({message: "student not found, did not sign up"});
        }
        if ( foundStudent && foundStudent.student_password !== password ){
            return res.json({message: "invalid password for user"});
        }

        return res.json({message: "Successful login"});
    }
    catch(error){
        res.status(500).json({message: "error getting email", error: error.message});
    }
};

module.exports = { getStudent };