document.addEventListener("DOMContentLoaded", () => {
  fetch("courses.php")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("course-list");

      data.forEach(course => {
        const li = document.createElement("li");

        li.innerHTML = `
          <a href="#" class="course-title">${course.course_title}</a>

          <div class="course-info">
            <p>${course.course_summary}</p>
            <p><strong>Type:</strong> ${course.course_type}</p>
            <p><strong>UCAS Code:</strong> ${course.ucas_code}</p>
          </div>
        `;

        const link = li.querySelector(".course-title");

        link.addEventListener("click", (e) => {
          e.preventDefault(); // stop page jump

          document.querySelectorAll(".course-list li").forEach(item => {
            if (item !== li) item.classList.remove("active");
          });

          li.classList.toggle("active");
        });

        list.appendChild(li);
      });
    })
    .catch(error => console.error("Error loading courses:", error));
});