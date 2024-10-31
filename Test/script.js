function submitQuiz(event) {
    event.preventDefault(); // Prevents traditional form submission
  
    // Collect basic details
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
  
    const mcqAnswers = [];
    const longAnswers = [];
  
    // Collect MCQ answers
    for (let i = 1; i <= 100; i++) {
      const selectedOption = document.querySelector(`input[name="mcq${i}"]:checked`);
      mcqAnswers.push(selectedOption ? selectedOption.value : "No answer");
    }
  
    // Collect long answers
    for (let i = 1; i <= 50; i++) {
      const answer = document.querySelector(`textarea[name="long${i}"]`).value;
      longAnswers.push(answer ? answer : "No answer");
    }
  
    // Display collected data (or handle as needed)
    console.log("Basic Details:", { name, email, age });
    console.log("MCQ Answers:", mcqAnswers);
    console.log("Long Answers:", longAnswers);
  
    alert("Quiz Submitted Successfully!");
  }
  