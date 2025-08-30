const API_BASE = "http://localhost:8080/api/feedback"; // Change after deploy

document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const feedback = {
    studentName: document.getElementById("studentName").value,
    facultyName: document.getElementById("facultyName").value,
    rating: document.getElementById("rating").value,
    comments: document.getElementById("comments").value
  };

  await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedback)
  });

  loadFeedback();
  e.target.reset();
});

async function loadFeedback() {
  const res = await fetch(API_BASE);
  const data = await res.json();
  const list = document.getElementById("feedbackList");
  list.innerHTML = "";
  data.forEach(f => {
    const li = document.createElement("li");
    li.textContent = `${f.studentName} → ${f.facultyName} | Rating: ${f.rating} | ${f.comments}`;
    list.appendChild(li);
  });
}

loadFeedback();