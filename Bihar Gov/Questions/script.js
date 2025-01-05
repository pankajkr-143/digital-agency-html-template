// Predefined users
const users = [
    { username: "Khushi", password: "6205535989" }
];
function redirectToSignup() {
    window.location.href = "/SignUp/index.html";
}

// Questions and answers (option values are in lowercase, i.e., a, b, c, d)
const questions = [
    { question: "1. भारत में सबसे अधिक विदेशी मुद्रा किस वस्तु के निर्यात से प्राप्त होती है?", correctAnswer: "d" },
    { question: "2. सिगरेट के धुएँ में मुख्य प्रदूषक है:", correctAnswer: "b" },
    { question: "3. 'मेक इन इंडिया' पहल का शुभारंभ किस वर्ष किया गया था?", correctAnswer: "c" },
    { question: "4. कौन-सा द्वीप समूह 'प्रशांत महासागर' में स्थित है?", correctAnswer: "d" },
    { question: "5. चंद्रमा के दक्षिणी ध्रुव पर अंतरिक्ष यान उतारने वाला पहला देश कौन-सा है?", correctAnswer: "b" },
    { question: "6. वर्ष 2024 तक विश्व का सबसे बड़ा सोलर पावर पार्क कौन-सा है?", correctAnswer: "c" },
    { question: "7. 'प्रोडुनोवा वॉल्ट' किस जिमनास्ट से जुड़ा है?", correctAnswer: "d" },
    { question: "8. BOD और COD के संदर्भ में कौन-सा कथन असत्य है?", correctAnswer: "d" },
    { question: "9. 'अकबरनामा' कितने वर्षों में पूरा हुआ?", correctAnswer: "b" },
    { question: "10. जैन धर्म में 'जम्भियाग्राम' का वर्तमान नाम क्या है?", correctAnswer: "d" },
    { question: "11. 'चौखंबा चोटी' कहाँ स्थित है?", correctAnswer: "b" },
    { question: "12. वर्ष 2011 की जनगणना के अनुसार बिहार के किस जिले में जनसंख्या घनत्व सबसे कम है?", correctAnswer: "c" },
    { question: "13. निम्न में से कौन सा देश सौर ऊर्जा के उत्पादन में अग्रणी है?", correctAnswer: "d" },
    { question: "14. मानव इतिहास की लगभग 99% कहानी निम्न में से किस काल के दौरान हुई?", correctAnswer: "a" },
    { question: "15. वैदिक सभ्यता काल में व्यापार हेतु दूर-दूर तक जाने वाले व्यक्ति को कहा जाता था:", correctAnswer: "b" },
    { question: "16. सही वाक्य चुनें:", correctAnswer: "d" },
    { question: "17. निम्न में से कौन-सा अयस्क कैल्शियम से संबंधित नहीं है?", correctAnswer: "d" },
    { question: "18. निम्न में असत्य है:", correctAnswer: "d" },
    { question: "19. जर्मन सिल्वर एक मिश्र धातु है जिसमें रजत (Ag) नहीं होता है। इसमें Cu (60%), Zn (20%) तथा Ni (20%) होता है। जर्मन सिल्वर के अन्य नामों से जाने जाते हैं। इनमें कौन-सा नाम इसमें शामिल नहीं है?", correctAnswer: "d" },
    { question: "20. विश्व का सबसे बड़ा दुग्ध-उत्पादक है:", correctAnswer: "d" },
    { question: "21. सिडनी बुरार्ड नामक भूगर्भशास्त्री ने नदियों के आधार पर हिमालय का विभाजन किया है जिसमें से कौन-सा हिमालय सर्वाधिक लम्बा है?", correctAnswer: "c" },
    { question: "22. बौद्ध संघ में सम्मिलित होने के लिए न्यूनतम आयु-सीमा थी:", correctAnswer: "b" },
    { question: "23. खतोली का युद्ध 1518 ई० में किसके-किसके बीच हुई थी?", correctAnswer: "a" },
    { question: "24. अंग्रेजी शासन के विरुद्ध निम्न में से कौन-सा आंदोलन (विद्रोह) असम में घटित नहीं हुआ?", correctAnswer: "d" },
    { question: "25. मौर्य काल में मनोरंजनकर्ताओं का नियंत्रक को कहा जाता था:", correctAnswer: "c" },
    { question: "26. केवल 'ALLAHABAD' के अक्षरों से कितने भिन्न-भिन्न शब्द बन सकते हैं? इनमें से कितने शब्दों में स्वर सम स्थानों पर होंगे?", correctAnswer: "a" },
    { question: "27. पृथ्वी के तुरंत बाद सर्वाधिक घनत्व वाला ग्रह है:", correctAnswer: "a" },
    { question: "28. निम्न में से वह नदी जिसके तट पर यूरोप के चार देशों की राजधानी अवस्थित है?", correctAnswer: "c" },
    { question: "29. शब्द 'प्रत्युपकार' में कौन-सा उपसर्ग है?", correctAnswer: "a" },
    { question: "30. निम्न कथनों पर विचार कर सही कथन का चुनाव कीजिए:", correctAnswer: "c" },
    { question: "31. 'गम्मत' है:", correctAnswer: "d" },
    { question: "32. एक गेंद को 50 m/s की चाल से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। गेंद को अधिकतम ऊँचाई तक पहुँचने में लगभग कितना समय लगेगा?", correctAnswer: "c" },
    { question: "34. भारत ने नवंबर 2024 में महिला एशियाई चैंपियंस ट्रॉफी जीतने के लिए किस टीम को हराया?", correctAnswer: "b" },
    { question: "35. निम्नलिखित में से कौन-सा देश कुष्ठ रोग को समाप्त करने वाला विश्व का पहला देश बन गया है?", correctAnswer: "b" },
    { question: "36. हाल ही में संयुक्त राज्य अमेरिका के डेलावेयर में 6वां क्वाड शिखर सम्मेलन आयोजित किया गया। निम्नलिखित में से कौन-सा देश क्वाड में शामिल नहीं है?", correctAnswer: "c" },
    { question: "37. द्रव यांत्रिकी में मैक संख्या 5 से अधिक है तो उस स्थिति को कहते हैं?", correctAnswer: "c" },
    { question: "38. एलियम सीपा ______ को वैज्ञानिक नाम है।", correctAnswer: "b" },
    { question: "39. निम्नलिखित में से कौन-सा 'त्योहार-राज्य' युग्म सही नहीं है?", correctAnswer: "c" },
    { question: "40. यदि हमारे एक हाथ में माला है, तो दूसरे हाथ में भाला भी है यह किस राजनेता का कथन है?", correctAnswer: "a" },
    { question: "41. 8वीं ईस्ट जोन शूटिंग चैंपियनशिप प्रतियोगिता में बिहार टीम ने कुल कितने स्वर्ण पदक जीते?", correctAnswer: "b" },
    { question: "42. बौद्ध धर्म की जातक कथाओं से संबंधित अजंता की गुफाओं का निर्माण किस वंश के काल में हुआ था?", correctAnswer: "d" },
    { question: "43. जहाँगीर के दरबार के प्रमुख चित्रकारों में किसके नेतृत्व में आगरा में एक चित्रणशाला की स्थापना हुई?", correctAnswer: "c" },
    { question: "44. यदि किसी वृत्त की त्रिज्या 4 cm है, तो उसका क्षेत्रफल क्या होगा?", correctAnswer: "d" },
    { question: "45. विश्व का सबसे बड़ा महासागर कौन सा है?", correctAnswer: "d" },
    { question: "46. किस आहार से हड्डियों में कैल्शियम की कमी होती है?", correctAnswer: "c" },
    { question: "47. 20 वीं शताबदी का पहला प्रमुख महिला एथलीट कौन थीं?", correctAnswer: "a" },
    { question: "49. 'सामान्य संतुलन विश्लेषण' किसने विकसित किया था?", correctAnswer: "d" },
    { question: "50. बेरोजगारी में वृद्धि किस प्रकार की अर्थव्यवस्था को संकेतित करता है?", correctAnswer: "b" },
    { question: "51. किसी जगह का स्थानीय समय 6:00 प्रातः है, जबकि ग्रीनविच मीन टाइम (GMT) 3:30 प्रातः है। उस जगह की देशांतर रेखा क्या होती है?", correctAnswer: "d" },
    { question: "52. पानी की एक टंकी के तल में दो छेद A तथा B हैं। केवल A छेद खोलने पर भरी हुई टंकी 60 मिनट में खाली होती है तथा केवल B छेद खोलने पर 30 मिनट में। यदि 10 मिनट तक दोनों छेद खोलकर छेद B बंद कर दिया जाए, तो भरी हुई टंकी को खाली करने में कुल समय लगेगा?", correctAnswer: "b" },
    { question: "53. होम्योपैथी के संस्थापक हैं:", correctAnswer: "c" },
    { question: "54. 'फ्रीडम इन इक्साइल' के लेखक कौन हैं?", correctAnswer: "a" },
    { question: "55. पारिस्थितिकी में कम्युनिटी को ______ भी कहा जाता है।", correctAnswer: "a" },
    { question: "56. भारतीय संविधान के किस अनुच्छेद के अंतर्गत संविधान में संशोधन का अधिकार है?", correctAnswer: "d" },
    { question: "57. विश्व का पहला प्रोगामेबल, इलेक्ट्रॉनिक सामान्य प्रयोजन वाला डिजिटल कंप्यूटर निम्नलिखित में से है?", correctAnswer: "b" },
    { question: "58. अंकों तथा अक्षरों की श्रेणी का अगला पद होगा- A26H, C24F, G20B, M14V, ?", correctAnswer: "b" },
    { question: "59. लघु उद्योगों के लिए बनी निम्न समितियों को कालानुक्रम में व्यवस्थित कीजिए और नीचे दिए गए कूटों में से सही उत्तर चुनिए:", correctAnswer: "a" },
    { question: "60. 2024 में महाराष्ट्र विधानसभा चुनाव में किस राजनीतिक गठबंधन ने बहुमत हासिल किया?", correctAnswer: "a" },
    { question: "60. 2024 में महाराष्ट्र विधानसभा चुनाव में किस राजनीतिक गठबंधन ने बहुमत हासिल किया?", correctAnswer: "a" },
    { question: "61. संयुक्त राष्ट्र संघ (UN) का मुख्यालय कहाँ स्थित है?", correctAnswer: "b" },
    { question: "62. महात्मा गांधी ने नमक सत्याग्रह किस वर्ष शुरू किया था?", correctAnswer: "a" },
    { question: "63. विश्व का सबसे बड़ा महासागर कौन सा है?", correctAnswer: "a" },
    { question: "64. निम्नलिखित में से कौन सा भारतीय राज्य सबसे बड़ा है?", correctAnswer: "d" },
    { question: "65. भारत में पहला रेलमार्ग कहाँ पर शुरू हुआ था?", correctAnswer: "a" },
    { question: "66. महात्मा गांधी ने 'हिंद स्वराज' पुस्तक किस वर्ष लिखी थी?", correctAnswer: "a" },
    { question: "67. 2023 में भारतीय फुटबॉल टीम का कोच कौन था?", correctAnswer: "d" },
    { question: "68. भारतीय संविधान में कितने अनुच्छेद हैं?", correctAnswer: "a" },
    { question: "69. वह कौन सा देश है जिसने 2023 में सबसे पहला मून मिशन किया था?", correctAnswer: "d" },
    { question: "70. \"नमः शंकराय\" का अर्थ क्या है?", correctAnswer: "b" },
    { question: "71. भारतीय संविधान के पहले संशोधन को कब पारित किया गया था?", correctAnswer: "b" },
    { question: "72. 'राष्ट्रपति शासन' किस धारा के तहत लागू किया जा सकता है?", correctAnswer: "d" },
    { question: "73. पाकिस्तान का राष्ट्रीय खेल कौन सा है?", correctAnswer: "c" },
    { question: "74. भारतीय संसद के दोनों सदनों का संयुक्त सत्र किस मामले में बुलाया जा सकता है?", correctAnswer: "c" },
    { question: "75. संयुक्त राष्ट्र सुरक्षा परिषद का स्थायी सदस्य नहीं है?", correctAnswer: "a" },
    { question: "76. 'कृपया' का अर्थ क्या है?", correctAnswer: "a" },
    { question: "77. 'नमस्कार' शब्द का प्रयोग कहाँ होता है?", correctAnswer: "a" },
    { question: "78. भारत के पहले राष्ट्रपति कौन थे?", correctAnswer: "d" },
    { question: "79. 'भारतीय विज्ञान संस्थान' कहाँ स्थित है?", correctAnswer: "a" },
    { question: "80. 'विराट कोहली' किस खेल के खिलाड़ी हैं?", correctAnswer: "d" },
    { question: "81. भारत में कौन सा राज्य 'स्वर्णिम त्रिभुज' के तहत आता है?", correctAnswer: "d" },
    { question: "82. भारत में राष्ट्रीय मानवाधिकार आयोग (NHRC) की स्थापना कब की गई थी?", correctAnswer: "b" },
    { question: "83. भारत का सबसे बड़ा राज्य कौन सा है?", correctAnswer: "b" },
    { question: "84. भारत के राष्ट्रपति की शपथ कौन लेते हैं?", correctAnswer: "c" },
    { question: "85. 'राजपथ' का नया नाम क्या है?", correctAnswer: "c" },
    { question: "86. 'कुम्भ मेला' किस नदी के किनारे आयोजित होता है?", correctAnswer: "c" },
    { question: "87. भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थी?", correctAnswer: "a" },
    { question: "88. भारत का सबसे बड़ा पर्वत कौन सा है?", correctAnswer: "b" },
    { question: "89. भारत में सबसे बड़ा शहर कौन सा है?", correctAnswer: "b" },
    { question: "90. भारतीय संसद की एक बैठक में न्यूनतम कितने सांसदों की आवश्यकता होती है?", correctAnswer: "a" },
    { question: "91. भारतीय संविधान में कुल कितनी धारा हैं?", correctAnswer: "a" },
    { question: "92. भारतीय राष्ट्रीय ध्वज के कौन से रंगों का प्रतीक क्या है?", correctAnswer: "b" },
    { question: "93. 'वृक्ष' शब्द का विलोम क्या है?", correctAnswer: "d" },
    { question: "94. 'विराट कोहली' के बारे में कौन सा कथन सत्य है?", correctAnswer: "c" },
    { question: "95. भारत में सबसे बड़ा पर्वत कौन सा है?", correctAnswer: "b" },
    { question: "96. भारतीय संविधान के अनुच्छेद 370 का संबंध किससे है?", correctAnswer: "b" },
    { question: "97. भारत के पहले प्रधानमंत्री कौन थे?", correctAnswer: "c" },
    { question: "98. 'जल जीवन मिशन' का उद्देश्य क्या है?", correctAnswer: "d" },
    { question: "99. भारत में राष्ट्रीय ऊर्जा सुरक्षा दिवस कब मनाया जाता है?", correctAnswer: "c" },
    { question: "100. 'राष्ट्रीय विज्ञान दिवस' कब मनाया जाता है?", correctAnswer: "a" }

    ];

// Store correct answer texts to display on "show answer" button click
const correctAnswerTexts = [
    { question: 1, text: "आईटी सेवाएं" },
    { question: 2, text: "कार्बन मोनोऑक्साइड व बेंजीन" },
    { question: 3, text: "2014" },
    { question: 4, text: "हवाई द्वीप" },
    { question: 5, text: "भारत" },
    { question: 6, text: "गोंगहे तलतन सोलर पार्क (चीन)" },
    { question: 7, text: "दीपा करमाकर" },
    { question: 8, text: "COD ऑक्सीकृत करने के लिए उपयोगी है।" },
    { question: 9, text: "7 वर्ष" },
    { question: 10, text: "गया" },
    { question: 11, text: "जम्मू-कश्मीर" },
    { question: 12, text: "कैमूर" },
    { question: 13, text: "भारत" },
    { question: 14, text: "पुरापाषाण काल" },
    { question: 15, text: "पाणि" },
    { question: 16, text: "A lot of books are on the table." },
    { question: 17, text: "MgCO₃" },
    { question: 18, text: "S = ut + ½ft³" },
    { question: 19, text: "इनमें से कोई नहीं" },
    { question: 20, text: "भारत" },
    { question: 21, text: "C. नेपाल हिमालय" },
    { question: 22, text: "B. 15 वर्ष" },
    { question: 23, text: "A. राणा साँगा व इब्राहिम लोदी" },
    { question: 24, text: "D. कोल विद्रोह" },
    { question: 25, text: "C. गणिकाध्यक्ष" },
    { question: 26, text: "A. 60" },
    { question: 27, text: "A. बुध" },
    { question: 28, text: "C. डेन्यूब" },
    { question: 29, text: "A. प्रति" },
    { question: 30, text: "C. 1 और 2" },
    { question: 31, text: "'गम्मत' है:" },
    { question: 32, text: "एक गेंद को 50 m/s की चाल से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। गेंद को अधिकतम ऊँचाई तक पहुँचने में लगभग कितना समय लगेगा?" },
    { question: 34, text: "भारत ने नवंबर 2024 में महिला एशियाई चैंपियंस ट्रॉफी जीतने के लिए किस टीम को हराया?" },
    { question: 35, text: "निम्नलिखित में से कौन-सा देश कुष्ठ रोग को समाप्त करने वाला विश्व का पहला देश बन गया है?" },
    { question: 36, text: "हाल ही में संयुक्त राज्य अमेरिका के डेलावेयर में 6वां क्वाड शिखर सम्मेलन आयोजित किया गया। निम्नलिखित में से कौन-सा देश क्वाड में शामिल नहीं है?" },
    { question: 37, text: "द्रव यांत्रिकी में मैक संख्या 5 से अधिक है तो उस स्थिति को कहते हैं?" },
    { question: 38, text: "एलियम सीपा ______ को वैज्ञानिक नाम है।" },
    { question: 39, text: "निम्नलिखित में से कौन-सा 'त्योहार-राज्य' युग्म सही नहीं है?" },
    { question: 40, text: "योगी आदित्यनाथ" },
    { question: 41, text: "7" },
    { question: 42, text: "गंग वंश" },
    { question: 43, text: "मुहम्मद नासिर" },
    { question: 44, text: "16π cm²" },
    { question: 45, text: "प्रशांत महासागर" },
    { question: 46, text: "फल" },
    { question: 47, text: "लिली लोरेन" },
    { question: 49, text: "मार्शल" },
    { question: 50, text: "अवनत" },
    { question: 51, text: "55° पूर्व" },
    { question: 52, text: "40 मिनट" },
    { question: 53, text: "हाइनेमैन" },
    { question: 54, text: "दलाई लामा" },
    { question: 55, text: "बायोलोजिकल कम्युनिटी" },
    { question: 56, text: "अनुच्छेद-368" },
    { question: 57, text: "ENIAC" },
    { question: 58, text: "U6N" },
    { question: 59, text: "3, 1, 2, 4" },
    { question: 60, text: "महायुति गठबंधन" },
    { question: 61, text: "न्यू यॉर्क" },
    { question: 62, text: "1930" },
    { question: 63, text: "प्रशांत महासागर" },
    { question: 64, text: "मध्य प्रदेश" },
    { question: 65, text: "मुंबई - ठाणे" },
    { question: 66, text: "1909" },
    { question: 67, text: "इगोर स्टिमैक" },
    { question: 68, text: "395" },
    { question: 69, text: "अमेरिका" },
    { question: 70, text: "भगवान शिव की शरण में" },
    { question: 71, text: "1951" },
    { question: 72, text: "धारा 356" },
    { question: 73, text: "हॉकी" },
    { question: 74, text: "कोई भी महत्वपूर्ण बिल" },
    { question: 75, text: "भारत" },
    { question: 76, text: "कृपा" },
    { question: 77, text: "सभी समय में" },
    { question: 78, text: "डॉ. राजेंद्र प्रसाद" },
    { question: 79, text: "बेंगलुरु" },
    { question: 80, text: "क्रिकेट" },
    { question: 81, text: "पंजाब" },
    { question: 82, text: "1988" },
    { question: 83, text: "राजस्थान" },
    { question: 84, text: "उपराष्ट्रपति" },
    { question: 85, text: "कर्तव्यपथ" },
    { question: 86, text: "गंगा" },
    { question: 87, text: "सरोजिनी नायडू" },
    { question: 88, text: "कंचनजंगा" },
    { question: 89, text: "मुंबई" },
    { question: 90, text: "50" },
    { question: 91, text: "395" },
    { question: 92, text: "सभी" },
    { question: 93, text: "झाड़" },
    { question: 94, text: "वह क्रिकेट के क्षेत्र में प्रसिद्ध हैं" },
    { question: 95, text: "कंचनजंगा" },
    { question: 96, text: "जम्मू और कश्मीर" },
    { question: 97, text: "जवाहरलाल नेहरू" },
    { question: 98, text: "जल आपूर्ति" },
    { question: 99, text: "15 अगस्त" },
    { question: 100, text: "28 फरवरी" },
];

// Store user answers
let userAnswers = [];
let correctAnswersCount = 0;
let incorrectAnswers = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        document.getElementById("loginPage").style.display = "none";
        showTestPage();
    } else {
        alert("Invalid credentials!");
    }
}

function showTestPage() {
    document.getElementById("testPage").style.display = "block";
}

function showAnswer(questionId, correctAnswer) {
    document.getElementById("answer" + questionId).innerHTML = "Correct Answer: " + correctAnswer;
}

function submitTest() {
    const answers = [];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedOption) {
            answers.push({ question: q.question, selectedAnswer: selectedOption.value });
        }
    });

    // Calculate result
    correctAnswersCount = 0;
    incorrectAnswers = [];
    answers.forEach(answer => {
        const correctAnswer = questions.find(q => q.question === answer.question).correctAnswer;

        // Compare selected answer with the correct answer (case-insensitive)
        if (answer.selectedAnswer === correctAnswer) {
            correctAnswersCount++;
        } else {
            const correctAnswerText = correctAnswerTexts.find(a => a.question === (questions.indexOf(questions.find(q => q.question === answer.question)) + 1)).text;
            incorrectAnswers.push({
                question: answer.question,
                userAnswer: answer.selectedAnswer,
                correctAnswer: correctAnswerText
            });
        }
    });

    showResult();
}

function showResult() {
    document.getElementById("testPage").style.display = "none";
    const resultPage = document.getElementById("resultPage");
    const resultSummary = document.getElementById("resultSummary");

    resultSummary.innerHTML = `
        <p>Correct Answers: ${correctAnswersCount}/${questions.length}</p>
        <p>Incorrect Answers:</p>
        <ul>
            ${incorrectAnswers.map(item => `
                <li>
                    <b>${item.question}</b><br>
                    Your answer: ${item.userAnswer.toUpperCase()}<br>
                    Correct answer: ${item.correctAnswer}
                </li>
            `).join('')}
        </ul>
    `;
    resultPage.style.display = "block";
}

function restartTest() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}
