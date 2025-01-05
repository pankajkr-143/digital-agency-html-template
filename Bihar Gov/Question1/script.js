const users = [
  { username: "Khushi", password: "6205535989" }
];

function redirectToSignup() {
  window.location.href = "/Bihar Gov/SignUp/index.html"; // Replace with your actual path
}

const questions = [
  { question: "1. भारत में सबसे अधिक विदेशी मुद्रा किस वस्तु के निर्यात से प्राप्त होती है?", correctAnswer: "D. आईटी सेवाएं" },
  { question: "2. सिगरेट के धुएँ में मुख्य प्रदूषक है:", correctAnswer: "A. कार्बन मोनोऑक्साइड व निकोटीन" },
  { question: "3. 'मेक इन इंडिया' पहल का शुभारंभ किस वर्ष किया गया था?", correctAnswer: "C. 2014" },
  { question: "4. कौन-सा द्वीप समूह 'प्रशांत महासागर' में स्थित है?", correctAnswer: "D. हवाई द्वीप" },
  { question: "5. चंद्रमा के दक्षिणी ध्रुव पर अंतरिक्ष यान उतारने वाला पहला देश कौन-सा है?", correctAnswer: "B. भारत" },
  { question: "6. वर्ष 2024 तक विश्व का सबसे बड़ा सोलर पावर पार्क कौन-सा है?", correctAnswer: "C. गोंगहे तलतन सोलर पार्क (चीन)" },
  { question: "7. 'प्रोडुनोवा वॉल्ट' किस जिमनास्ट से जुड़ा है?", correctAnswer: "D. दीपा करमाकर" },
  { question: "8. BOD और COD के संदर्भ में कौन-सा कथन असत्य है?", correctAnswer: "D. COD ऑक्सीकृत करने के लिए उपयोगी है।" },
  { question: "9. 'अकबरनामा' कितने वर्षों में पूरा हुआ?", correctAnswer: "B. 7 वर्ष" },
  { question: "10. जैन धर्म में 'जम्भियाग्राम' का वर्तमान नाम क्या है?", correctAnswer: "B. गया" },
  { question: "11. 'चौखंबा चोटी' कहाँ स्थित है?", correctAnswer: "B. उत्तराखंड" },
  { question: "12. वर्ष 2011 की जनगणना के अनुसार बिहार के किस जिले में जनसंख्या घनत्व सबसे कम है?", correctAnswer: "C. कैमूर" },
  { question: "13. निम्न में से कौन सा देश सौर ऊर्जा के उत्पादन में अग्रणी है?", correctAnswer: "A. चीन" },
  { question: "14. मानव इतिहास की लगभग 99% कहानी निम्न में से किस काल के दौरान हुई?", correctAnswer: "A. पुरापाषाण काल" },
  { question: "15. वैदिक सभ्यता काल में व्यापार हेतु दूर-दूर तक जाने वाले व्यक्ति को कहा जाता था:", correctAnswer: "B. पाणि" },
  { question: "16. सही वाक्य चुनें:", correctAnswer: "D. A lot of books are on the table." },
    { question: "17. निम्न में से कौन-सा अयस्क कैल्शियम से संबंधित नहीं है?", correctAnswer: "D. MgCO₃" },
    { question: "18. निम्न में असत्य है:", correctAnswer: "D. S = ut + ½ft²" },
    { question: "19. जर्मन सिल्वर एक मिश्र धातु है जिसमें रजत (Ag) नहीं होता है। इसमें Cu (60%), Zn (20%) तथा Ni (20%) होता है। जर्मन सिल्वर के अन्य नामों से जाने जाते हैं। इनमें कौन-सा नाम इसमें शामिल नहीं है?", correctAnswer: "D. इनमें से कोई नहीं" },
    { question: "20. विश्व का सबसे बड़ा दुग्ध-उत्पादक है:", correctAnswer: "D. भारत" },
    { question: "21. सिडनी बुरार्ड नामक भूगर्भशास्त्री ने नदियों के आधार पर हिमालय का विभाजन किया है जिसमें से कौन-सा हिमालय सर्वाधिक लम्बा है?", correctAnswer: "C. नेपाल हिमालय" },
    { question: "22. बौद्ध संघ में सम्मिलित होने के लिए न्यूनतम आयु-सीमा थी:", correctAnswer: "B. 15 वर्ष" },
    { question: "23. खतोली का युद्ध 1518 ई० में किसके-किसके बीच हुई थी?", correctAnswer: "A. राणा साँगा व इब्राहिम लोदी" },
    { question: "24. अंग्रेजी शासन के विरुद्ध निम्न में से कौन-सा आंदोलन (विद्रोह) असम में घटित नहीं हुआ?", correctAnswer: "A. पागलपंथी विद्रोह" },
    { question: "25. मौर्य काल में मनोरंजनकर्ताओं का नियंत्रक को कहा जाता था:", correctAnswer: "D. विविताध्यक्ष" },
    { question: "26. केवल 'ALLAHABAD' के अक्षरों से कितने भिन्न-भिन्न शब्द बन सकते हैं? इनमें से कितने शब्दों में स्वर सम स्थानों पर होंगे?", correctAnswer: "A. 60" },
    { question: "27. पृथ्वी के तुरंत बाद सर्वाधिक घनत्व वाला ग्रह है:", correctAnswer: "A. बुध" },
    { question: "28. निम्न में से वह नदी जिसके तट पर यूरोप के चार देशों की राजधानी अवस्थित है?", correctAnswer: "C. डेन्यूब" },
    { question: "29. शब्द 'प्रत्युपकार' में कौन-सा उपसर्ग है?", correctAnswer: "A. प्रति" },
    { question: "30. निम्न कथनों पर विचार कर सही कथन का चुनाव कीजिए: वर्ष 2024 में 33वें ग्रीष्मकालीन ओलंपिक खेलों का आयोजन पेरिस (फ्रांस) में 26 जुलाई से 11 अगस्त हुआ। पेरिस 2024 शुभंकर फ्रांसमें 'ला फ्रीज ओलम्पिक' और 'ला फ्रीज पैरालंपिक' नामों के तहत पंजीकृत ट्रेडमार्क है।", correctAnswer: "C. 1 और 2" },
];

function showAnswer(questionNumber, correctAnswerText) {
  const answerDiv = document.getElementById(`answer${questionNumber}`);
  answerDiv.textContent = correctAnswerText;
}

function submitTest() {
  let correctAnswers = 0;
  const resultSummary = document.getElementById("resultSummary");
  resultSummary.innerHTML = "";

  let incorrectQuestionsHTML = "";

  for (let i = 0; i < questions.length; i++) {
      const questionNumber = i + 1;
      const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
      const questionDiv = document.getElementById(`question${questionNumber}`);
      const correctAnswerText = questions[i].correctAnswer.trim();
      let userAnswerValue;
      let userAnswerText;

      if (selectedOption) {
          userAnswerValue = selectedOption.value;
          const selectedLabel = selectedOption.parentNode;
          userAnswerText = selectedLabel.textContent.trim();

          if (userAnswerText === correctAnswerText) {
              correctAnswers++;
              questionDiv.classList.add("correct");
              questionDiv.classList.remove("incorrect", "show-correct");
          } else {
              questionDiv.classList.add("incorrect");
              questionDiv.classList.remove("correct");
              questionDiv.classList.add("show-correct");

              incorrectQuestionsHTML += `
                  <div class="incorrect-question-details">
                      <p>${questions[i].question}</p>
                      <p>गलत उत्तर : ${userAnswerValue.toUpperCase()}</p>
                      <p>सही उत्तर : ${correctAnswerText}</p>
                  </div>
              `;
          }
      } else {
          questionDiv.classList.add("unanswered");
          questionDiv.classList.remove("correct", "incorrect", "show-correct");
      }
  }

  resultSummary.innerHTML = `सही उत्तर : ${correctAnswers}/${questions.length}`;

  if (incorrectQuestionsHTML) {
      resultSummary.innerHTML += `
          <div class="incorrect-questions-summary">
              <h3>गलत उत्तर / व्याख्या :</h3>
              ${incorrectQuestionsHTML}
          </div>
      `;
  }

  document.getElementById("testPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
}

function restartTest() {
  document.getElementById("testPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
  const questionDivs = document.querySelectorAll(".question");
  questionDivs.forEach(div => {
      div.classList.remove("correct", "incorrect", "unanswered", "show-correct");
      const radios = div.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => radio.checked = false);
      const answerDiv = div.querySelector(".answer");
      if (answerDiv) {
          answerDiv.textContent = "";
      }
  });
}

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (usernameInput && passwordInput) {
      const username = usernameInput.value;
      const password = passwordInput.value;

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
          document.getElementById("loginPage").style.display = "none";
          document.getElementById("testPage").style.display = "block";
      } else {
          alert("Invalid username or password");
      }
  } else {
      console.error("Username or password input fields not found.");
  }
}