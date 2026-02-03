const courses = [
  { id: 1, title: "Programming" },
  { id: 2, title: "Algebra" },
  { id: 3, title: "Probability" },
  { id: 4, title: "Data Structures in C" },
  { id: 5, title: "Operating Systems" }
];

function getAllCourses() {
  return courses;
}

module.exports = {
  getAllCourses
};