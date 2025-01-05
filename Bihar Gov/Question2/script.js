const users = [
    { username: "Khushi", password: "6205535989" }
];

function redirectToSignup() {
    window.location.href = "/Bihar Gov/SignUp/index.html";
}

const questions = [
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
    { question: "60. 2024 में महाराष्ट्र विधानसभा चुनाव में किस राजनीतिक गठबंधन ने बहुमत हासिल किया?", correctAnswer: "A. महायुति गठबंधन" }
];

function showAnswer(questionNumber, correctAnswerText) {
    const answerDiv = document.getElementById(`answer${questionNumber}`);
    if (answerDiv) {
        answerDiv.textContent = correctAnswerText;
    } else {
        console.error(`Answer div not found for question ${questionNumber}`);
    }
}

function submitTest() {
    let correctAnswers = 0;
    const resultSummary = document.getElementById("resultSummary");
    const incorrectQuestionsSummary = document.getElementById("incorrectQuestionsSummary"); // नया element
    if (!resultSummary || !incorrectQuestionsSummary) {
        console.error("Result summary element not found.");
        return;
    }

    resultSummary.innerHTML = "";
    incorrectQuestionsSummary.innerHTML = ""; // reset incorrect questions

    let incorrectQuestionsHTML = "";

    for (let i = 0; i < questions.length; i++) {
        const questionNumber = parseInt(questions[i].question.split(".")[0], 10);
        const questionDiv = document.getElementById(`question${questionNumber}`);
        if (!questionDiv) {
            console.error(`Question div not found for question ${questionNumber}`);
            continue; // अगले प्रश्न पर जाएँ
        }

        const selectedOption = questionDiv.querySelector(`input[name="q${questionNumber}"]:checked`);
        const correctAnswerText = questions[i].correctAnswer.trim();

        if (selectedOption) {
            const selectedLabel = selectedOption.parentNode;
            if (!selectedLabel) {
                 console.error("Selected label not found for question ${questionNumber}");
                 continue;
            }
            const userAnswerText = selectedLabel.textContent.trim();
            const userAnswerValue = selectedOption.value;

            if (userAnswerText === correctAnswerText) {
                correctAnswers++;
                questionDiv.classList.add("correct");
                questionDiv.classList.remove("incorrect", "unanswered");
            } else {
                questionDiv.classList.add("incorrect");
                questionDiv.classList.remove("correct", "unanswered");
                incorrectQuestionsHTML += `
                    <div class="incorrect-question-details">
                        <p>${questions[i].question}</p>
                        <p>गलत उत्तर : ${userAnswerText} (${userAnswerValue.toUpperCase()})</p>
                        <p>सही उत्तर : ${correctAnswerText}</p>
                    </div>
                `;
            }
        } else {
            questionDiv.classList.add("unanswered");
            questionDiv.classList.remove("correct", "incorrect");
        }
    }

    resultSummary.textContent = `सही उत्तर : ${correctAnswers}/${questions.length}`;

    if (incorrectQuestionsHTML) {
        incorrectQuestionsSummary.innerHTML = `
            <h3>गलत उत्तर / व्याख्या :</h3>
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
    }else {
        console.error("Username or password input fields not found.");
    }
}