const courseModel = require("../Model/coursemodels");

function getCourses(req, res) {
  const search = req.query.search;
  const courses = courseModel.getAllCourses();

  if (!search) {
    return res.json(courses);
  }

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  res.json(filteredCourses);
}

module.exports = {
  getCourses
};