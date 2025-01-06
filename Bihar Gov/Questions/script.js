const users = [
  { username: "Khushi", password: "6205535989" }
];

function redirectToSignup() {
  window.location.href = "/Bihar Gov/SignUp/index.html"; // Replace with your actual path
}

const questions = [
    { question: "1. राष्ट्रीय सांख्यिकी दिवस मनाया जाता है-", correctAnswer: "C. 29 जून" },
    { question: "2. गोवा को पुर्तगालियो की राजधानी कब बनाया गया?", correctAnswer: "B. 1530" },
    { question: "3. विद्युत सेल ऊर्जा का रूपांतरण करता है-", correctAnswer: "A. रासायनिक को विद्युत" },
    { question: "4. निम्न में कौन सुमेलित नहीं है?", correctAnswer: "C. तरंग सिद्धांत - वेबर" },
    { question: "5. कौन उष्ण कटिबंधीय घास का मैदान है?", correctAnswer: "D. सवाना" },
    { question: "6. राष्ट्रीय आपातकाल निम्न आधारों पर लगाए जा सकते है-", correctAnswer: "A, B, C" },
    { question: "7. धन विधेयक की परिभाषा वर्णित है-", correctAnswer: "B. अनु०-110" },
    { question: "8. रेलवे बोर्ड के नए अध्यक्ष/CEO कौन बने हैं-", correctAnswer: "A. जया वर्मा सिन्हा" },
    { question: "9. G-20 का 19वां (2024) सम्मेलन कहां होगा?", correctAnswer: "B. ब्राजील" },
    { question: "10. पुलकेशिन II द्वारा नर्मदा नदी के किनारे हर्षवर्धन के पराजय का प्रमाण मिलता है-", correctAnswer: "B. ऐहोल अभिलेख" },
    { question: "11. दिल्ली सल्तनत का एकमात्र सुल्तान जिसने अपनी आत्मकथा स्वयं लिखी है-", correctAnswer: "D. फिरोज शाह तुगलक" },
    { question: "12. 9° अक्षांश अलग करता है-", correctAnswer: "A. मिनिकॉय कवारत्ती" },
    { question: "13. कपास अनुसंधान संस्थान अवस्थित है-", correctAnswer: "C. नागपुर" },
    { question: "14. भारत में सिंधु नदी की सबसे बड़ी सहायक नदी है-", correctAnswer: "B. चेनाब" },
    { question: "15. आवर्त में बाएँ से दाएँ जाने पर परमाणु आकार-", correctAnswer: "A. घटता" },
    { question: "16. अम्ल में सामान्यतः गुण पाया जाता है-", correctAnswer: "A. प्रोटॉन दे सकता है" },
    { question: "17. आर्य महिला समाज की संस्थापक थीं-", correctAnswer: "A. पंडिता रमाबाई" },
    { question: "18. बुद्ध की प्रथम मूर्ति प्राप्त हुआ है-", correctAnswer: "A. मथुरा कला में" },
    { question: "19. बोधिसत्व पद्मपाणि का चित्र मिला है-", correctAnswer: "B. अजन्ता चित्रकला" },
    { question: "20. न्यायपालिका का कार्यपालिका से पृथक्करण वर्णित है-", correctAnswer: "C. नीति निदेशक सिद्धांत में" },
    { question: "21. 'आत्मविश्वास' में समास है :-", correctAnswer: "C. तत्पुरुष" },
    { question: "22. 2023 का चिकित्सा का नोबेल दिया गया है-", correctAnswer: "D. A+ C दोनों" },
    { question: "23. 33वां ग्रीष्मकालीन ओलंपिक कहा आयोजित होगा?", correctAnswer: "A. पेरिस" },
    { question: "24. वैश्विक यूनिकॉन रैकिंग-2023 में शीर्ष पर है-", correctAnswer: "D. अमेरिका" },
    { question: "25. गरीबी उन्मूलन तथा आत्मनिर्भरता किस योजना का लक्ष्य था?", correctAnswer: "C. पांचवी पंचवर्षीय योजना" },
    { question: "26. बैंक दर में कमी की ऋण उपलब्धता पर क्या प्रभाव पड़ेगा?", correctAnswer: "B. बढ़ जाएगा" },
    { question: "27. राज्यपाल कितने सदस्यों को विधानपरिषद में मनोनीत करता है?", correctAnswer: "A. 1/6 सदस्य" },
    { question: "28. कृषि में प्रयुक्त यूरिया में नाइट्रोजन की मात्रा होती है-", correctAnswer: "B. 46%" },
    { question: "29. घटनाओं को क्रमानुसार सजाइए-", correctAnswer: "B. A, C, B, E, D" },
    { question: "30. गरुिल्ला युद्ध में शिवाजी के अग्रणी कौन थे-", correctAnswer: "B. मलिक अंबर" },
    { question: "31. वायरस के विकास के लिए आवश्यक है-", correctAnswer: "D. जीवित कोशिकाएं" },
    { question: "32. क्रोमैटोग्राफी एक तकनीक है-", correctAnswer: "C. द्रव मिश्रण से पदार्थों को अलग करने का" },
    { question: "33. पदार्थ के संवेग, वेग का अनुपात क्या है?", correctAnswer: "D. द्रव्यमान" },
    { question: "34. ब्रोमीन सामान्य ताप पर होती है-", correctAnswer: "B. द्रव" },
    { question: "35. भारत में सर्वाधिक भू-भाग पर कौन-सी मिट्टी पाई जाती है?", correctAnswer: "B. जलोढ़ मिट्टी" },
    { question: "36. भूमध्य सागर का प्रकाश स्तंभ कहते है-", correctAnswer: "B. स्ट्राम्बोली ज्वालामुखी" },
    { question: "37. घूमती हुई वस्तुओं की गति मापने वाला यंत्र है-", correctAnswer: "B. गइरोस्कोप" },
    { question: "38. मनुष्य के शरीर की दूसरी सबसे बड़ी ग्रंथि है-", correctAnswer: "C. अग्नाशय" },
    { question: "39. गन में उपस्थित अवयव है-", correctAnswer: "C. तांबा जस्ता" },
    { question: "40. कार्य, विस्थापन, बल में क्या संबंध है?", correctAnswer: "D. कार्य = विस्थापन × बल" },
    { question: "41. कलकत्ता में उच्चतम न्यायालय की स्थापना की गई-", correctAnswer: "C. 1773 के अधिनियम द्वारा" },
    { question: "42. आल इंडिया ट्रेड यूनियन कांग्रेस (AITUC) के प्रथम अध्यक्ष थे-", correctAnswer: "D. लाला लाजपत राय" },
    { question: "43. इंद्र, वरूण, मित्र, नासत्य का वर्णन मिलता है-", correctAnswer: "C. बोगाजकोई" },
    { question: "44. निम्न में कौन सुमेलित नहीं है?", correctAnswer: "D. दुधसागर प्रपात- नर्मदा नदी" },
    { question: "45. बिहार के नखास पिंड आंदोलन का संबंद्ध है-", correctAnswer: "D. सविनय अवज्ञा आंदोलन" },
    { question: "46. बिहार में गंगा के दक्षिण से मिलने वाली नदी है-", correctAnswer: "A. पुनपुन" },
    { question: "47. यंग बंगाल आंदोलन के प्रवर्तक थे-", correctAnswer: "D. डेरेजियो" },
    { question: "48. सबसे बड़ी सूखा का प्रधान लिया गया है-", correctAnswer: "D. अफ्रीका" },
    { question: "49. राष्ट्रपति पर महाभियोग लगाने के लिए सदन के कितने सदस्यों से हस्ताक्षरित नोटिस प्रस्तुत करना होता है?", correctAnswer: "A. 25%" },
    { question: "50. निम्न में कौन सुमेलित नहीं है-", correctAnswer: "C. बलवंत राय मेहता समिति- 1960" },
    { question: "51. 1935 के अधिनियम को किसने 'दासता का नया चार्टर' कहा था?", correctAnswer: "A. नेहरू" },
    { question: "52. बिहार में व्यक्तिगत सत्याग्रह के प्रथम सत्याग्रही थे-", correctAnswer: "A. श्री कृष्ण सिंह" },
    { question: "53. पदार्थ की प्रकृति हृदय गति को बढ़ाता है-", correctAnswer: "B. क्षार" },
    { question: "54. किस काल में अछूत की अवधारणा स्पष्ट हुई?", correctAnswer: "B. उत्तरवैदिक काल" },
    { question: "55. मुगल काल में 'मदद-ए-माश' था-", correctAnswer: "D. विद्वानों को कर मुक्त भूमि" },
    { question: "56. वनों के संरक्षण, संवर्धन की क्रिया कहलाती है-", correctAnswer: "B. सिल्वीकल्चर" },
    { question: "57. पौधे नाइट्रोजन किस रूप में प्राप्त करते है-", correctAnswer: "C. नाइट्रेट" },
    { question: "58. ल्यूकेमिया कैंसर में RBC में क्या होता है?", correctAnswer: "A. असाधारण वृद्धि" },
    { question: "59. मेंडल का आनुवंशिकता सिद्धांत आधारित है-", correctAnswer: "B. लैंगिक जनन" },
    { question: "60. आर्थिक मंदी आमतौर पर संबंधित है-", correctAnswer: "A. अपस्थिति पर" },
    { question: "61. कौन राजकोषीय नीति का उपकरण नहीं है-", correctAnswer: "C. ओपेन मार्केट आपरेशन" },
    { question: "62. अलीनगर की संधि किनके मध्य हुई थी?", correctAnswer: "A. सिराजुदौला - क्लाइव" },
    { question: "63. भोजन का सर्वाधिक अवशोषण कहां होता है?", correctAnswer: "C. इलियम" },
    { question: "64. राष्ट्रपति का विधेयक पर सहमति या वापस लौटाना किस अनु० में वर्णित है?", correctAnswer: "B. अनु०-111" },
    { question: "65. राष्ट्रीय आपातकाल के समय लोकसभा का कार्यकाल बढ़ाया जा सकता है-", correctAnswer: "D. अनिश्चित काल तक लेकिन एक बार में एक वर्ष" },
    { question: "66. जीवाणुओं की कोशिका भित्ति बनी होती है-", correctAnswer: "C. कार्बोहाइड्रेट" },
    { question: "67. सहकारी समितियों को संवैधानिक दर्जा प्राप्त हुआ-", correctAnswer: "C. 97वां संशोधन" },
    { question: "68. आय की असमानता का माप किया जाता है-", correctAnswer: "B. लॉरेंज वक्र" },
    { question: "69. प्रधानमंत्री की नियुक्ति राष्ट्रपति करेगा, किस अनुछेद में वर्णित है?", correctAnswer: "B. अनु०-75 (i)" },
    { question: "70. लीडर समाचार पत्र के संस्थापक थे-", correctAnswer: "B. मदन मोहन मालवीय" },
    { question: "71. नमक को बर्फ में मिलाने पर हिमांक-", correctAnswer: "B. घटता है" },
    { question: "72. पृथ्वी का पलायन वेग का मान है-", correctAnswer: "A. 11.2 किमी./से." },
    { question: "73. लैंगरहैंस की द्विपिका के किस कोशिका से इंसुलिन का स्रावण होता है?", correctAnswer: "B. β कोशिका" },
    { question: "74. एक मोबाइल फोन चार्जर है-", correctAnswer: "C. स्टेप डाउन ट्रांसफर्मर" },
    { question: "75. वस्तु की मात्रा बदलने पर क्या अपरिवर्तित रहेगा?", correctAnswer: "D. घनत्व" },
    { question: "76. दीवान-ए-मुस्तखराज विभाग की स्थापना किसने की थी?", correctAnswer: "D. अलाउद्दीन खिलजी" },
    { question: "77. सिंध का विलय कब किया गया?", correctAnswer: "A. 1843" },
    { question: "78. अखिल भारतीय किसान सभा का प्रथम अधिवेशन कहां हुआ था?", correctAnswer: "C. लखनऊ" },
    { question: "79. इंडियन रिफॉर्म एशोसिएसन की स्थापना की थी-", correctAnswer: "A. केशवचंद्र सेन" },
    { question: "80. 1857 की क्रांति के समय ब्रिटिश प्रधानमंत्री थे-", correctAnswer: "D. पामर्स्टन" },
    { question: "81. महाराष्ट्र सरकार द्वारा पहला उद्योग रत्न पुरस्कार दिया गया है।", correctAnswer: "A. रतन टाटा" },
    { question: "82. भारत ने चंद्रमा पर आंतरिक्ष यात्री भेजने का लक्ष्य रखा है-", correctAnswer: "C. 2040" },
    { question: "83. हाल ही में चंद्रमा आंतरिक्ष यान को चलाने के लिए भाप का उपयोग किस देश की एजेंसी ने किया है।", correctAnswer: "B. जापान" },
    { question: "84. ग्यारहवां कोया अभियान प्रारंभ किया गया है?", correctAnswer: "D. ओडिशा" },
    { question: "85. 'जाबल जीवन तू सुधारी यही कहानी' एक मोबाइल ओलों में पानी।। उपरोक्त काव्य में रस है:-", correctAnswer: "D. करुण रस" },
    { question: "86. नोमाडिक एलिफेंट थल सेना युद्धभ्यास किन देशों के बीच सम्पन्न हुआ?", correctAnswer: "D. भारत-मंगोलिया" },
    { question: "87. हरित हाइड्रोजन के लिए भारत ने किसके साथ समझौता किया है-", correctAnswer: "B. सऊदी अरब" },
    { question: "88. Change into direct to indirect. She asked me, \"What is your name?\"", correctAnswer: "B. She asked me what your name is." },
    { question: "89. अंतर्राष्ट्रीय गीता महोत्सव 2023 मनाया गया है-", correctAnswer: "A. कुरुक्षेत्र" },
    { question: "90. भारत के प्रधानमंत्री को किस देश का सर्वोच्च पुरस्कार 'आर्डर आफ द नाइल' दिया गया है।", correctAnswer: "B. मिस्र" },
    { question: "91. महाराष्ट्र विधान परिषद के प्रतिपक्ष थे-", correctAnswer: "a. शंकरराव चौहान" },
    { question: "92. बृहदेश्वर मंदिर कहाँ अवस्थित है-", correctAnswer: "B. तंजौर" },
    { question: "93. बांग्लादेश के साथ कितने भारतीय राज्य सीमा साझा करते है-", correctAnswer: "C. पांच" },
    { question: "94. आस्वान बांध किस नदी पर अवस्थित है-", correctAnswer: "A. नीक" },
    { question: "95. Select the option that is nearest in meaning to the underlined word. \"He is a maleficent person.\"", correctAnswer: "D. criminal" },
    { question: "96. A किसी काम को 12 दिन, B उसे 15 दिनों में कर सकता है। A अकेले शुरू करता है। 3 दिन बाद B शामिल हो जाता है। शेष काम दोनों मिलकर कितने दिनों में करेंगे?", correctAnswer: "A. 5 दिन" },
    { question: "97. एक नल एक हौज को 8 घंटे में भर देता है, दूसरे उसे 16 घंटे में खाली कर देता है। अगर दोनों एक साथ खोल दिए जाए तो कितने समय में हौज भर जायेगा?", correctAnswer: "C. 16 घंटे" },
    { question: "98. यदि एक संख्या 15% बढ़ाई जाती है, प्राप्त संख्या पुनः 20% बढ़ाई जाती है तो कुल वृद्धि प्रतिशत ज्ञात करें।", correctAnswer: "B. 38%" },
    { question: "99. एक व्यक्ति 1140 रु. पर घड़ी बेचता है, उसे 5% की हानि होती है, 5% का लाभ प्राप्त करने के लिए उसे कितने रु. में घड़ी बेचनी होगी?", correctAnswer: "B. 1260" },
    { question: "100. 10% वार्षिक साधारण ब्याज की दर से कोई धन कितने वर्षों में चार गुणा हो जाएगा?", correctAnswer: "A. 30 वर्ष" }
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