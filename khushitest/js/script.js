document.getElementById("details-form").onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
  
    document.getElementById("details-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
  };
  
  document.getElementById("quiz-form").onsubmit = function (event) {
    event.preventDefault();
    submitQuiz();
  };
  
  function submitQuiz() {
    const correctAnswers = {
        q1: "आईटी सेवाएं",
        q2: "कार्बन मोनोऑक्साइड व निकोटीन",
        q3: "2015",
        q4: "अंडमान और निकोबार",
        q5: "भारत",
        q6: "भदला सोलर पार्क (भारत)",
        q7: "दीपा करमाकर",
        q8: "BOD पानी में मौजूद कार्बनिक पदार्थों को तोड़ने के लिए एरोबिक सूक्ष्मजीवों द्वारा इस्तेमाल की जाने वाली ऑक्सीजन की मात्रा को मापता है, जबकि COD पानी में मौजूद कार्बनिक और अकार्बनिक प्रदूषकों को रासायनिक रूप से ऑक्सीकृत करने के लिए जरूरी ऑक्सीजन की मात्रा को मापता है।",
        q9: "7 वर्षों में",
        q10: "गया",
        q11: "लद्दाख",
        q12: "कैमूर",
        q14: "पुरापाषाण काल",  // Answer for Question 14
        q15: "पाणि",  // Answer for Question 15
        q16: "D",  // Answer for Question 16
        q17: "MgCO₃",  // Answer for Question 17
        q18: "S = ut + ½ft³",  // Answer for Question 18
        q19: "इनमें से कोई नहीं",  // Answer for Question 19
        q20: "भारत",  // Answer for Question 20
        q21: "A",  // Answer for Question 21
        q22: "B",  // Answer for Question 22
        q23: "A",  // Answer for Question 23
        q24: "D",  // Answer for Question 24
        q25: "C",  // Answer for Question 25
        q26: "7560",
        q27: "शुक्र",
        q28: "डेन्यूब",
        q29: "प्रति",
        q30: "1 और 2",
        q31: "लोकनाट्य",
        q32: "5 Sec",
        q34: "चीन",
        q35: "ब्रुनेई",
        q36: "चीन",
        q37: "माउंट किलाउए",
        q38: "गैसों का आदान-प्रदान",
        q39: "वस्तु",
        q40: "राजनीतिक बंदियों को बिना मुकदमा चलाए जेल",
        q41: "कैल्शियम फॉस्फेट",
        q42: "संघीय",
        q43: "टेस्ला",
        q44: "असम",
        q45: "राजस्थान",
        q46: "सोयाबीन",
        q47: "अनुच्छेद 12-35",
        q48: "1918 स्पेनिश फ्लू",
        q49: "D",
        q50: "B",
        q51: "B",
        q52: "B",
        q53: "C",
        q54: "A",
        q55: "A",
        q56: "D",
        q57: "B",
        q58: "D",
        q59: "A",
        q60: "A",
        q61: "B",
        q62: "B",
        q63: "B",
        q64: "A",
        q65: "A",
        q66: "A",
        q67: "D",
        q68: "A",
        q69: "D",
        q70: "B",
        q71: "B",
        q72: "D",
        q73: "C",
        q74: "C",
        q75: "A",
        q76: "A",
        q77: "A",
        q78: "B",
        q79: "A",
        q80: "A",
        q81: "B",
        q82: "B",
        q83: "B",
        q84: "B",
        q86: "C",
        q87: "C",
        q88: "B",
        q89: "B",
        q90: "B",
        q91: "B",
        q92: "B",
        q93: "C",
        q94: "C",
        q95: "B",
        q96: "A",
        q97: "C",
        q98: "D",
        q99: "A",
        q100: "A"
    };
  
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
  
    for (const question in correctAnswers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        score++;
      }
    }
  
    const name = sessionStorage.getItem("name");
  
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";
    document.getElementById("result").textContent = `${name}, you scored ${score}/${totalQuestions}.`;
  }
  
  // Enable the submit button once all questions have been answered
  const allQuestions = document.querySelectorAll("input[type='radio']");
  const submitButton = document.getElementById("submit-btn");
  
  allQuestions.forEach(question => {
    question.addEventListener("change", checkFormCompletion);
  });
  
  function checkFormCompletion() {
    const allAnswered = [...allQuestions].every(q => q.checked);
    submitButton.enabled = !allAnswered;
  }
  
  submitButton.enabled = true;
  