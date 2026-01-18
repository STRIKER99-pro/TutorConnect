import connection from "../config/databaseConnect";

const getSelectCourseInfo = async (req, res) => {
  // getting course name and tutor name 
    try {
        const [{ tutor_name, course_name }] = await connection.promise().query("SELECT tutor_info.tutor_name, course_info.course_name FROM tutor_info \
        JOIN course_info ON tutor_info.courseID = course_info.courseID");

        res.status(200).json([{ tutor_name, course_name }]);
    } catch (error) {
        res.status(500).json({ message: "Error fetching payment details" });
    }   
};

// POST /api/bookings
const SetPaymentMethod = async (req, res) => {

  // getting payment method to for checkout to use 
  try {
    const payMethod = req.body.payMethod

    const injectSQL = 'INSERT INTO payment_info(payment_method) VALUES (?)'

     connection.execute(injectSQL, [payMethod], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'injection failed' });
            }
            res.status(200).json({ 
                success: true,
                message: 'successfully insert paymentMethod!',
            });
        });
    }
    catch(error){
      res.json(error.message);
    }
};


module.exports = { SetPaymentMethod, getSelectCourseInfo };





 /*const createPayment = async (req, res) => {
  try {
    const { courseID } = req.body.courseID;   // ← this is the correct way
    console.log(req.body)

    if (!courseID) {
      return res.status(400).json({ message: "courseID is required" });
    }

    const payment = await booking.createPayment(courseID, req.body);

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  */