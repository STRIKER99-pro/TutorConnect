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

const enterStudent = (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if student already exists
    const checkSql = 'SELECT * FROM student_info WHERE email = ?';

    connection.execute(checkSql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (results.length > 0) {
            return res.json({ message: 'User already exists. Please log in instead.' });
        }
        
        // Insert new student
        const insertSql = 'INSERT INTO student_info(student_name, email, student_password) VALUES (?, ?, ?)';
        connection.execute(insertSql, [username, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Registration failed' });
            }
            res.status(200).json({ 
                success: true,
                message: 'Student registered successfully!',
                userId: result.insertId 
            });
        });
    });
};

module.exports = { getStudent, enterStudent };