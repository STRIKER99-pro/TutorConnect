const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const courseContainer = document.getElementById("courseContainer")


searchInput.addEventListener("input", async () => {
  const searchValue = searchInput.value.trim();

  try {
    const response = await fetch(
      `http://localhost:3000/courses?search=${searchValue}`
    );

    const courses = await response.json();

    
    // Go to heaven
    courseContainer.innerHTML = "";

    if (courses.length === 0) {
      courseContainer.innerHTML = "<p>No courses found</p>";
      return;
    }

    courses.forEach(course => {

      const courseInsertion = `
       <div class="courses">

        <div class="course-preview">
            <div class="img-container">
                <a href="Bradley's code/bradley'scode.html"><img class="img" ${src="images/Algebra-101.jpg"}></a>
            </div>
            <div class="price-section">
                <a class="tooltip">20,000FCFA</a>
            </div>
        </div>

        <div class="course-info">
         <div class="labels">
          
            <a class="type">Engineering</a> 
         </div>

         <div class="dest">
            <p class="des">${course.title}</p>
            <p class="desmain">Learn how to program the most common programming language (C) and OOP language (C++)</p>
         </div>

        </div>

    </div>
      `

      courseContainer.innerHTML += courseInsertion;
      
    });
    e
    // Go to hell 
   /* resultsDiv.innerHTML = "";

    if (courses.length === 0) {
      resultsDiv.innerHTML = "<p>No courses found</p>";
      return;
    }

    courses.forEach(course => {
      const div = document.createElement("title");

      div.className= "courseinjs";
      div.id= "coursewithjs-${}";
      div.textContent = course.title;
      resultsDiv.appendChild(div);
    });
    */

  } catch (error) {
    resultsDiv.innerHTML = "<p>Error loading courses</p>";
    console.error(error);
  }
})
 
/*
  fetch(`http://localhost:3000/courses?search=${searchValue}`)    .then(response => response.json())
    .then(courses => {
      resultsDiv.innerHTML = "";            
      courses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.title;
        resultsDiv.appendChild(div);
      });
    })
    });

    */