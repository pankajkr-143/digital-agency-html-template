const users = [
  { username: "Khushi", password: "6205535989" },
  { username: "Aryan", password: "9570335451" },
  { username: "Khushi", password: "9508932073" },
  { username: "Guru@1234", password: "7870816431" },
  { username: "@prabhakar", password: "9708597841" },
  { username: "Rupa Yadav", password: "9263793703" },
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
    { question: "31. 'गम्मत' है:", correctAnswer: "D. लोकनाट्य" },
    { question: "32. एक गेंद को 50 m/s की चाल से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। गेंद को अधिकतम ऊँचाई तक पहुँचने में लगभग कितना समय लगेगा?", correctAnswer: "C. 5 Sec" },
    { question: "34. भारत ने नवंबर 2024 में महिला एशियाई चैंपियंस ट्रॉफी जीतने के लिए किस टीम को हराया?", correctAnswer: "A. जापान" },
    { question: "35. निम्नलिखित में से कौन-सा देश कुष्ठ रोग को समाप्त करने वाला विश्व का पहला देश बन गया है?", correctAnswer: "B. जॉर्डन" },
    { question: "36. हाल ही में संयुक्त राज्य अमेरिका के डेलावेयर में 6वां क्वाड शिखर सम्मेलन आयोजित किया गया। निम्नलिखित में से कौन-सा देश क्वाड में शामिल नहीं है?", correctAnswer: "C. चीन" },
    { question: "37. द्रव यांत्रिकी में मैक संख्या 5 से अधिक है तो उस स्थिति को कहते हैं?", correctAnswer: "B. हाइपरसोनिक" },
    { question: "38. एलियम सीपा ______ को वैज्ञानिक नाम है।", correctAnswer: "B. प्याज" },
    { question: "39. निम्नलिखित में से कौन-सा 'त्योहार-राज्य' युग्म सही नहीं है?", correctAnswer: "C. योशंग - मणिपुर" },
    { question: "40. यदि हमारे एक हाथ में माला है, तो दूसरे हाथ में भाला भी है यह किस राजनेता का कथन है?", correctAnswer: "A. योगी आदित्यनाथ" },
    { question: "41. आठवीं ईस्ट जोन शूटिंग चैंपियनशिप प्रतियोगिता में बिहार टीम ने कुल कितने स्वर्ण पदक जीते?", correctAnswer: "B. 7" },
    { question: "42. बौद्ध धर्म की जातक कथाओं से संबंधित अजंता की गुफाओं का निर्माण किस वंश के काल में हुआ था?", correctAnswer: "D. सातवाहन वंश" },
    { question: "43. जहाँगीर के दरबार के प्रमुख चित्रकारों में किसके नेतृत्व में आगरा में एक चित्रणशाला की स्थापना हुई?", correctAnswer: "D. आगा रजा" },
    { question: "44. यदि किसी वृत्त की त्रिज्या 4 cm है, तो उसका क्षेत्रफल क्या होगा?", correctAnswer: "A. 16π cm²" },
    { question: "45. विश्व का सबसे बड़ा महासागर कौन सा है?", correctAnswer: "C. प्रशांत महासागर" },
    { question: "46. किस आहार से हड्डियों में कैल्शियम की कमी होती है?", correctAnswer: "D. अत्यधिक नमक/सोडा युक्त आहार" },
    { question: "47. 20 वीं शताबदी का पहला प्रमुख महिला एथलीट कौन थीं?", correctAnswer: "A. लिली लोरेन" },
    { question: "49. 'सामान्य संतुलन विश्लेषण' किसने विकसित किया था?", correctAnswer: "D. वालरस" },
    { question: "50. बेरोजगारी में वृद्धि किस प्रकार की अर्थव्यवस्था को संकेतित करता है?", correctAnswer: "B. अवनत" },
    { question: "51. किसी जगह का स्थानीय समय 6:00 प्रातः है, जबकि ग्रीनविच मीन टाइम (GMT) 3:30 प्रातः है। उस जगह की देशांतर रेखा क्या होती है?", correctAnswer: "B. 37.5° पूर्व" },
    { question: "52. पानी की एक टंकी के तल में दो छेद A तथा B हैं। केवल A छेद खोलने पर भरी हुई टंकी 60 मिनट में खाली होती है तथा केवल B छेद खोलने पर 30 मिनट में। यदि 10 मिनट तक दोनों छेद खोलकर छेद B बंद कर दिया जाए, तो भरी हुई टंकी को खाली करने में कुल समय लगेगा?", correctAnswer: "B. 40 मिनट" },
    { question: "53. होम्योपैथी के संस्थापक कौन हैं?", correctAnswer: "C. सैमुअल हैनिमैन" },
    { question: "54. 'फ्रीडम इन एक्साइल' के लेखक कौन हैं?", correctAnswer: "A. दलाई लामा" },
    { question: "55. पारिस्थितिकी में कम्युनिटी को ______ भी कहा जाता है।", correctAnswer: "A. बायोलोजिकल कम्युनिटी" },
    { question: "56. भारतीय संविधान के किस अनुच्छेद के अंतर्गत संविधान में संशोधन का अधिकार है?", correctAnswer: "D. अनुच्छेद-368" },
    { question: "57. विश्व का पहला प्रोगामेबल, इलेक्ट्रॉनिक सामान्य प्रयोजन वाला डिजिटल कंप्यूटर निम्नलिखित में से है?", correctAnswer: "B. ENIAC" },
    { question: "58. अंकों तथा अक्षरों की श्रेणी का अगला पद होगा- A26H, C24F, G20B, M14V, ?", correctAnswer: "B. U6N" },
    { question: "59. लघु उद्योगों के लिए बनी निम्न समितियों को कालानुक्रम में व्यवस्थित कीजिए और नीचे दिए गए कूटों में से सही उत्तर चुनिए-", correctAnswer: "A. 1, 3, 2, 4" },
    { question: "60. 2024 में महाराष्ट्र विधानसभा चुनाव में किस राजनीतिक गठबंधन ने बहुमत हासिल किया?", correctAnswer: "A. महायुति गठबंधन" },
    { question: "61. संयुक्त राष्ट्र संघ (UN) का मुख्यालय कहाँ स्थित है?", correctAnswer: "B. न्यू यॉर्क" },
    { question: "62. महात्मा गांधी ने नमक सत्याग्रह किस वर्ष शुरू किया था?", correctAnswer: "A. 1930" },
    { question: "63. विश्व का सबसे बड़ा महासागर कौन सा है?", correctAnswer: "A. प्रशांत महासागर" },
    { question: "64. क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?", correctAnswer: "C. राजस्थान" },
    { question: "65. भारत में पहली रेलगाड़ी किन दो शहरों के बीच चली थी?", correctAnswer: "A. मुंबई - ठाणे" },
    { question: "66. महात्मा गांधी द्वारा लिखित 'हिंद स्वराज' किस वर्ष प्रकाशित हुई थी?", correctAnswer: "A. 1909" },
    { question: "67. 2023 में भारतीय पुरुष फुटबॉल टीम के मुख्य कोच कौन थे?", correctAnswer: "B. इगोर स्टिमैक" },
    { question: "68. भारतीय संविधान में मूल रूप से कितने अनुच्छेद थे?", correctAnswer: "A. 395" },
    { question: "69. 2023 में चंद्रमा पर सफलतापूर्वक उतरने वाला पहला देश कौन सा था?", correctAnswer: "B. भारत" },
    { question: "70. \"नमः शिवाय\" का क्या अर्थ है?", correctAnswer: "A. शिव को नमस्कार" },
    { question: "71. भारतीय संविधान के पहले संशोधन को कब पारित किया गया था?", correctAnswer: "C. 1951" },
    { question: "72. 'राष्ट्रपति शासन' किस धारा के तहत लागू किया जा सकता है?", correctAnswer: "A. धारा 356" },
    { question: "73. पाकिस्तान का राष्ट्रीय खेल कौन सा है?", correctAnswer: "B. हॉकी" },
    { question: "74. भारतीय संसद के दोनों सदनों का संयुक्त सत्र किस मामले में बुलाया जा सकता है?", correctAnswer: "C. साधारण विधायी मामलों में गतिरोध होने पर" },
    { question: "75. निम्नलिखित में से कौन संयुक्त राष्ट्र सुरक्षा परिषद का स्थायी सदस्य नहीं है?", correctAnswer: "A. भारत" },
    { question: "76. 'कृपया' का अर्थ क्या है?", correctAnswer: "C. अनुग्रह/मेहरबानी" },
    { question: "77. 'नमस्कार' शब्द का प्रयोग कब किया जाता है?", correctAnswer: "D. किसी भी समय" },
    { question: "78. भारत के पहले राष्ट्रपति कौन थे?", correctAnswer: "A. डॉ. राजेंद्र प्रसाद" },
    { question: "79. भारतीय विज्ञान संस्थान (IISc) कहाँ स्थित है?", correctAnswer: "B. बेंगलुरु" },
    { question: "80. विराट कोहली किस खेल से संबंधित हैं?", correctAnswer: "A. क्रिकेट" },
    { question: "81. भारत का 'स्वर्णिम चतुर्भुज' परियोजना किससे संबंधित है?", correctAnswer: "C. राष्ट्रीय राजमार्ग" },
    { question: "82. भारत में राष्ट्रीय मानवाधिकार आयोग (NHRC) की स्थापना किस वर्ष हुई थी?", correctAnswer: "A. 1993" },
    { question: "83. क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?", correctAnswer: "C. राजस्थान" },
    { question: "84. भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?", correctAnswer: "B. भारत के मुख्य न्यायाधीश" },
    { question: "85. 'राजपथ' का परिवर्तित नाम क्या है?", correctAnswer: "B. कर्तव्य पथ" },
    { question: "86. कुम्भ मेला किन नदियों के संगम पर आयोजित होता है?", correctAnswer: "A. गंगा, यमुना, सरस्वती" },
    { question: "87. भारतीय राष्ट्रीय कांग्रेस की प्रथम महिला अध्यक्ष कौन थीं?", correctAnswer: "A. एनी बेसेंट" },
    { question: "88. भारत में स्थित सबसे ऊँचा पर्वत शिखर कौन सा है? (पूर्णतः भारत में)", "correctAnswer": "B. कंचनजंगा" },
    { question: "89. जनसंख्या के अनुसार भारत का सबसे बड़ा शहर कौन सा है?", "correctAnswer": "A. मुंबई" },
    { question: "90. भारतीय संसद के किसी सदन की बैठक के लिए न्यूनतम गणपूर्ति (कोरम) क्या है?", "correctAnswer": "C. सदन के कुल सदस्यों का दसवां भाग" },
    { question: "91. भारतीय संविधान में (मूल रूप से) कितने अनुच्छेद थे?", correctAnswer: "B. 395" },
    { question: "92. भारतीय राष्ट्रीय ध्वज के रंगों का प्रतीक क्या है?", correctAnswer: "D. सभी" },
    { question: "93. 'वृक्ष' शब्द का विलोम क्या है?", correctAnswer: "C. झाड़" },
    { question: "94. 'विराट कोहली' के बारे में कौन सा कथन सत्य है?", correctAnswer: "A. वह क्रिकेट के क्षेत्र में प्रसिद्ध हैं" },
    { question: "95. भारत में स्थित सबसे ऊँचा पर्वत शिखर जो पूर्णतः भारत में स्थित है, कौन सा है?", correctAnswer: "B. कंचनजंगा" },
    { question: "96. भारतीय संविधान के अनुच्छेद 370 का संबंध किससे था?", correctAnswer: "A. जम्मू और कश्मीर" },
    { question: "97. भारत के पहले प्रधानमंत्री कौन थे?", correctAnswer: "A. जवाहरलाल नेहरू" },
    { question: "98. 'जल जीवन मिशन' का उद्देश्य क्या है?", correctAnswer: "D. हर घर में नल का जल (पाइप से जल आपूर्ति)" },
    { question: "99. भारत में राष्ट्रीय ऊर्जा संरक्षण दिवस कब मनाया जाता है?", correctAnswer: "B. 14 दिसम्बर" },
    { question: "100. 'राष्ट्रीय विज्ञान दिवस' कब मनाया जाता है?", correctAnswer: "A. 28 फरवरी" }
  
];

function showAnswer(questionNumber) {
    const questionData = questions.find(q => parseInt(q.question.split(".")[0], 10) === questionNumber);
    if (!questionData) {
        console.error(`Question data not found for question number ${questionNumber}`);
        return;
    }

    const answerDiv = document.getElementById(`answer${questionNumber}`);
    if (!answerDiv) {
        console.error(`Answer div not found for question number ${questionNumber}`);
        return;
    }

    answerDiv.textContent = questionData.correctAnswer;
}

function submitTest() {
    let correctAnswers = 0;
    const resultSummary = document.getElementById("resultSummary");
    const incorrectQuestionsSummary = document.getElementById("incorrectQuestionsSummary");

    if (!resultSummary || !incorrectQuestionsSummary) {
        console.error("Result summary या incorrect questions summary element नहीं मिला।");
        return;
    }

    resultSummary.innerHTML = "";
    incorrectQuestionsSummary.innerHTML = "";
    let incorrectQuestionsHTML = "";

    for (const questionData of questions) { // for...of loop का उपयोग करें
        const questionNumber = parseInt(questionData.question.split(".")[0], 10);
        const questionDiv = document.getElementById(`question${questionNumber}`);

        if (!questionDiv) {
            console.error(`Question div #${questionNumber} नहीं मिला`);
            continue;
        }

        const selectedOption = questionDiv.querySelector(`input[name="q${questionNumber}"]:checked`);
        const correctAnswerText = questionData.correctAnswer.trim();

        if (selectedOption) {
            const selectedLabel = selectedOption.parentNode;
            if (!selectedLabel) {
                console.error(`Selected label question #${questionNumber} नहीं मिला`);
                continue;
            }
            const userAnswerText = selectedLabel.textContent.trim();

            if (userAnswerText === correctAnswerText) {
                correctAnswers++;
                questionDiv.classList.add("correct");
                questionDiv.classList.remove("incorrect", "unanswered");
            } else {
                questionDiv.classList.add("incorrect");
                questionDiv.classList.remove("correct", "unanswered");
                incorrectQuestionsHTML += `
                    <div class="incorrect-question-details">
                        <p>${questionData.question}</p>
                        <p>आपका उत्तर: ${userAnswerText}</p>
                        <p>सही उत्तर: ${correctAnswerText}</p>
                    </div>
                `;
            }
        } else {
            questionDiv.classList.add("unanswered");
            questionDiv.classList.remove("correct", "incorrect");
        }
    }

    resultSummary.textContent = `सही उत्तर: ${correctAnswers}/${questions.length}`;

    if (incorrectQuestionsHTML) {
        incorrectQuestionsSummary.innerHTML = `
            <h3>गलत उत्तर/व्याख्या:</h3>
            ${incorrectQuestionsHTML}
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