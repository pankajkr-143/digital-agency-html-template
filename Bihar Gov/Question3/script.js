const users = [
    { username: "Khushi", password: "6205535989" },
    { username: "Aryan", password: "9570335451" },
    { username: "Khushi", password: "9508932073" },
    { username: "Guru@1234", password: "7870816431" },
    { username: "@prabhakar", password: "9708597841" },
  ];
  
  function redirectToSignup() {
    window.location.href = "/Bihar Gov/SignUp/index.html"; // Replace with your actual path
  }
  
  const questions = [
      { question: "1. भारत के नए कैबिनेट सचिव के रूप में किसे नियुक्त किया गया है, जो 30 अगस्त, 2024 से कार्य संभालेंगे?", correctAnswer: "C. राजीव गौबा" },
      { question: "2. 13 अगस्त, 2014 में समाप्त हुए योजना आयोग के अंतिम उपाध्यक्ष निम्न में से कौन थे?", correctAnswer: "C. श्री मोंटेक सिंह अहलूवालिया" },
      { question: "3. निम्नलिखित नारों में 'आजाद हिंद फौज' के नारों में शामिल नहीं था?", correctAnswer: "A. इंकलाब जिंदाबाद" },
      { question: "4. ब्रिटिश साम्राज्य में विलय के समय पंजाब का महाराजा कौन था?", correctAnswer: "A. महाराजा दीलीप सिंह" },
      { question: "5. Choose the Correct Sentence:", correctAnswer: "C. We have to reach on time for the Play" },
      { question: "6. भारत का पहला और सबसे पुराना जैवमंडल आरक्षित क्षेत्र है, जिसे वर्ष 1986 में किया गया था?", correctAnswer: "A. नीलगिरि जैवमंडल" },
      { question: "7. निम्नलिखित में से कौन-सा ईरान की मुद्रा का नाम है?", correctAnswer: "D. रियाल" },
      { question: "8. मुद्रा के स्थैतिक कार्य क्या है?", correctAnswer: "D. मूल्य का मापक पर प्रभाव" },
      { question: "9. पेरिस ओलंपिक, 2024 में किस भारतीय पहलवान को अधिक वजन के कारण 50 किग्रा फ्रीस्टाइल कुश्ती फाईनल से अयोग्य घोषित कर दिया गया था?", correctAnswer: "C. विनेश फोगाट" },
      { question: "10. दो सेक्टर अर्थव्यवस्था प्रारूप में समग्र आपूर्ति होती है:", correctAnswer: "A. C+I" },
      { question: "11. आजीवन\" शब्द में कौन सा समास है?", correctAnswer: "A. अव्ययीभाव" },
      { question: "12. हिटलर का निम्नलिखित में से कौन-सा वैचारिक दृष्टिकोण था?", correctAnswer: "F. A, B और C" },
      { question: "13. भारतीय अर्थव्यवस्था के सकल राष्ट्रीय उत्पादन में सबसे अधिक योगदान निम्नलिखित में से कौन सा क्षेत्र करता है?", correctAnswer: "C. तृतीयक क्षेत्र" },
      { question: "14. राज्य विधान परिषद की सदस्य संख्या के आधार पर निम्नलिखित राज्यों में दूसरा स्थान प्राप्त है?", correctAnswer: "A. महाराष्ट्र" },
      { question: "15. निम्नलिखित में से किस शहर को 'पर्वतों की रानी' कहा जाता है?", correctAnswer: "D. मसूरी" },
      { question: "16. निम्नलिखित में से किस राज्य को दुनिया के दो सबसे बड़े धर्मों की उद्गम स्थल माना जाता है?", correctAnswer: "A. उत्तरप्रदेश" },
      { question: "17. स्वतंत्रता आंदोलन के दौरान 15 फरवरी, 1942 को 'जलियांवाला बाग कांड' से भी बर्बर घटना बिहार के किस स्थान पर घटित हुई थी जिसमें 34 क्रांतिकारी शहीद हुए थे?", correctAnswer: "D. तारापुर" },
      { question: "18. बिहार में खनिज उत्पादन के संदर्भ में निम्नलिखित स्थानों पर विचार करें:", correctAnswer: "D. उपरोक्त तीनों" },
      { question: "19. पंडित जवाहर लाल नेहरू के नारों/वचनों में निम्न में से कौन शामिल नहीं है?", correctAnswer: "A. जय जवान जय किसान" },
      { question: "20. किस मध्यकालीन संत का प्रसिद्ध ग्रंथ \"पंथ परीक्षा\" है?", correctAnswer: "A. दादू" },
      { question: "21. एक फोटो सेल प्रकाश की ऊर्जा को बदलता है:-", correctAnswer: "A. विद्युत ऊर्जा" },
      { question: "22. प्रथम विश्व युद्ध के दौरान निम्नलिखित में से कौन सा देश वर्ष 1916 के बाद मित्र देशों में शामिल हुआ था?", correctAnswer: "B. संयुक्त राज्य अमेरिका" },
      { question: "23. बिहार के निम्नलिखित जिलों में से किसमें आपको न्यूनतम क्षेत्रफल में अति विरल वन मिलेंगे?", correctAnswer: "C. शेखपुरा" },
      { question: "24. भारतीय संविधान की व्याख्या करने वाली अंतिम संस्था कौन-सी है?", correctAnswer: "B. सुप्रीम कोर्ट" },
      { question: "25. मुँह से फुलाने वाले गुब्बारे में निम्नलिखित में से कौन-सी गैस होती है?", correctAnswer: "A. हीलियम" },
      { question: "26. प्रति वर्ष चक्रवृद्धि ब्याज की किस दर पर, वार्षिक रूप से संयोजित होने पर, कोई धनराशि 2 वर्षों में 400 गुना हो जाती है?", correctAnswer: "D. 16%" },
      { question: "27. प्राण एवं दैहिक स्वतंत्रता का संरक्षण से संबंधित अनुच्छेद है:", correctAnswer: "D. 21" },
      { question: "28. इटली के 'एकीकरण की तलवार' निम्न में से किसे कहा जाता है?", correctAnswer: "D. गैरीबाल्डी" },
      { question: "29. विश्व की सबसे ऊंची सुरंग शिंकुन ला टनल का निर्माण कहाँ किया जा रहा है?", correctAnswer: "D. लद्दाख" },
      { question: "30. निम्नलिखित में से कौन-सा इलेक्ट्रॉनिक विन्याश धातु तत्वों के लिए होता है?", correctAnswer: "B. 2, 8, 18, 2" },
      { question: "31. लापाज राजधानी है-", correctAnswer: "D. बोलीविया" },
      { question: "32. मैंग्रोव जंगलों के विषय में, इनमें से कौन-सा कथन गलत है ?", correctAnswer: "D. भारत के हरियाणा, पंजाब, बिहार राज्यों में यह वन पाये जाते है।" },
      { question: "33. अंतर्राष्ट्रीय मुद्रा कोष (IMF) के मुख्य कार्यों में सम्मिलित नहीं है?", correctAnswer: "D. यह सदस्य देशों को दीर्घकालिक पूंजी प्रदान करती है" },
      { question: "34. विस्थापन-समय ग्राफ का ढलान देता है:-", correctAnswer: "C. वेग" },
      { question: "35. किसके परिणामस्वरूप पांचवीं शताब्दी ई. में गुप्त साम्राज्य का पतन हुआ?", correctAnswer: "B. हूण आक्रमण के" },
      { question: "36. निम्नलिखित में से कौन-सा तत्व सबसे अधिक प्रचुर मात्रा में समुद्र में पाया जाता है?", correctAnswer: "B. क्लोरीन" },
      { question: "37. चुनाव आयोग ने लोकसभा चुनाव में बड़े राज्यों के प्रत्याशियों को अपने प्रचार के लिए खर्च की छूट सीमा निर्धारित की है जो निम्नलिखित में है:-", correctAnswer: "D. 75 लाख रु" },
      { question: "38. टाटा मोटर्स ने वर्ष 2024 (जनवरी) में कौन-सी इलेक्ट्रिक कार लॉन्च की है?", correctAnswer: "D. टाटा सिerrिटि" },
      { question: "39. वर्ष 2024 में किस टीम ने कोपा अमेरिका चैम्पियनशिप जीती?", correctAnswer: "C. अर्जेंटीना" },
      { question: "40. बिजली से लगी आग यानी क्लास-डी प्रकार के आग बुझाने में प्रयुक्त होता है?", correctAnswer: "C. सूखा पाउडर अग्निशामक" },
      { question: "41. गुर्दे की कार्यात्मक इकाई है:", correctAnswer: "D. नेफ्रॉन" },
      { question: "42. यदि भारत के प्रधानमंत्री संसद के उच्च सदन के सदस्य हैं, तो", correctAnswer: "B. वे अविश्वास प्रस्ताव की स्थिति में अपने पक्ष में वोट नहीं दे सकेंगे।" },
      { question: "43. स्वचालित वाहनों में द्रवचालित ब्रेकों का इस्तेमाल वस्तुतः किस नियम का सीधा अनुप्रयोग है?", correctAnswer: "B. पास्कल का नियम" },
      { question: "44. निम्नलिखित में से किसके कारण किसी उत्पाद की मांग की मात्रा में परिवर्तन होगा?", correctAnswer: "A. उत्पाद की घटती कीमत" },
      { question: "45. निम्नलिखित में से कौन-सा कथन विपक्षी नेता के संदर्भ में गलत है?", correctAnswer: "D. उसे कम से कम छह प्रतिशत वोट हासिल हों" },
      { question: "46. 600 मीटर की एक दौड़ में तपन, समित को 60 मीटर से हरा देता है और 500 मीटर की दौड़ में समित, मदन को 25 मीटर से हरा देता है, तो कितने मीटर से 400 मीटर की दौड़ में तपन, मदन को हरा देगा।", correctAnswer: "B. 52 मीटर" },
      { question: "47. ‘कैसे हो’ किस वाक्य का उदाहरण है?", correctAnswer: "D. प्रश्नवाचक" },
      { question: "48. अस्थि खनिज घनत्व (Bone Mineral Density-BMD) परीक्षण की जाँच की जाती है:", correctAnswer: "D. ऑस्टियोपोरोसिस की" },
      { question: "49. जुलाई 2024 में अपनी यात्रा के दौरान पीएम मोदी को प्राप्त रूस के सर्वोच्च नागरिक पुरस्कार है:", correctAnswer: "D. सेंट एंड्रयू द एपोस्टल का आदेश" },
      { question: "50. उच्च न्यायालय को किसका अधीक्षण करने का अधिकार है?", correctAnswer: "C. अधीनस्थ न्यायालय" },
      { question: "51. सूची-I को सूची-II के साथ सुमेलित करें तथा सूचियों के नीचे दिए गए कूट का प्रयोग करते हुए सही उत्तर का चयन करें", correctAnswer: "A. A-1, B-2, C-3, D-4" },
      { question: "52. निम्नलिखित में से किसको \"White of the earth\" कहा जाता है?", correctAnswer: "B. क्रस्ट (Crust)" },
      { question: "53. हार्मोन का उदाहरण है-", correctAnswer: "A. ऑक्सीटोसिन" },
      { question: "54. भारत के दक्षिण पश्चिम भाग में अरब सागर से लगे सागरतट को- - कहते है।", correctAnswer: "D. मालावार तट" },
      { question: "55. श्रेणी (1 + x) का प्रसार है-", correctAnswer: "C. 1-2x+3x²-4x²" },
      { question: "56. इनमें से कौन राज्य के नीति निर्देशक सिद्धांतों में सम्मिलित नहीं है?", correctAnswer: "D. सूचना का अधिकार" },
      { question: "57. किस अनुच्छेद के तहत भारत में वित्त आयोग का गठन किया गया है?", correctAnswer: "C. अनुच्छेद- 280" },
      { question: "58. गांधी को सबसे पहले महात्मा किसने कहा था?", correctAnswer: "B. रवींद्रनाथ टैगोर" },
      { question: "59. 19 जुलाई, 2024 को वैश्विक तकनीकी विफलता का क्या कारण था?", correctAnswer: "C. क्राउडस्ट्राइक के इडीआर उत्पाद का एक सॉफ्टवेयर" },
      { question: "60. पटना उच्च न्यायालय के मुख्य न्यायाधीश के पद पर आसीन सर्वप्रथम महिला न्यायाधीश कौन थी?", correctAnswer: "B. सुश्री ज्ञान सुधा मिश्रा" },
      { question: "61. आयोडीन युक्त हार्मोन है-", correctAnswer: "B. थायरोक्सिन" },
      { question: "62. 'हिन्दी दिवस' मनाया जाता है:-", correctAnswer: "D. 14 सितंबर" },
      { question: "63. निम्नलिखित में से किसकी नियुक्ति राष्ट्रपति द्वारा नहीं की जाती है?", correctAnswer: "D. राज्य के विधानसभा के अध्यक्ष एवं सदस्य" },
      { question: "64. निम्नलिखित में सुमेलित नहीं है-", correctAnswer: "C. क्लाद मोने-अमेरिका" },
      { question: "65. गर्मी के दिनों के दौरान, मिट्टी के बर्तन में रखा पानी ठंडा हो जाता है, निम्नलिखित संवृत्ति के कारण-", correctAnswer: "C. वाष्पीकरण" },
      { question: "66. निम्नलिखित में से कौन 'अगस्त प्रस्ताव' का प्रस्ताव रखा था?", correctAnswer: "D. लॉर्ड लिनलिथगो" },
      { question: "67. किन देशों की मुद्रा प्रायः हार्ड करेन्सी होती है?", correctAnswer: "C. विकसित देशों की" },
      { question: "68. निम्न में से कौन-सी समिति बैंकिंग क्षेत्र में सुधारों से संबंधित है?", correctAnswer: "A. नरसिंहन समिति" },
      { question: "69. हैदराबाद (आंध्रप्रदेश) में उद्घाटन किए गए भारत के पहले सोलर रूफ साइक्लिंग ट्रैक का नाम क्या हैं?", correctAnswer: "B. हेल्थेव" },
      { question: "71. DNA का डबल हेलिक्स मॉडल किसने दिया?", answer: "C. वाटसन व क्रिक" },
      { question: "72. निम्नलिखित में से भारत की चौथी सर्वाधिक बोली जाने वाली भाषा है?", answer: "B. तेलुगू" },
      { question: "73. आयुष्मान भारत राष्ट्रीय स्वास्थ्य सुरक्षा योजना के तहत कितने रुपये तक का कवरेज प्रदान करती है?", answer: "A. प्रति वर्ष प्रति परिवार 5 लाख" },
      { question: "74. सूची-I (सेना) का सूची-II (आदर्श वाक्य) से सुमेलित करे तथा सूचियों के नीचे दिए गए कूट का प्रयोग करते हुए सही उत्तर का चयन करें:-<br><p><strong>सूची-I (सेना)</strong></p><p>A. वायु सेना</p><p>B. थल सेना</p><p>C. गोरखा सेना</p><p>D. नौ सेना</p><p><strong>सूची-II (आदर्श वाक्य)</strong></p><p>1. कायर की तरह जीने से मरना बेहतर है</p><p>2. सम्मान, साहस व प्रतिबद्धता</p><p>3. स्वयं से पहले सेवा</p><p>4. गौरव के साथ आकाश को छुओ</p><p><strong>कूटः-</strong></p>", answer: "C. A-4, B-3, C-1, D-2" },
      { question: "75. चमगादड़ किस प्रकार की ध्वनि तरंगों के परावर्तन का उत्सर्जन और अनुसंधान करके शिकार को खोजते हैं और अंधेरी रात में उड़ते हैं?", answer: "C. अतिध्वनिक तरंगें" },
      { question: "76. सबसे अधिक प्रयोग करने वाली दर्द निवारक दवा है-", answer: "A. एसिटामिनोफेन" },
      { question: "77. यदि A तथा B मिलकर किसी काम को 12 दिन में तथा B तथा C उसे 15 दिन में पूरा कर सकते हैं। यदि C की तुलना में A दोगुना अच्छा कार्य करता है, तो उस कार्य को पूरा करने में अकेला B कितने दिन लेगा?", answer: "D. 20 दिनों" },
      { question: "78. भारत के नियंत्रक एवं महालेखा परीक्षक द्वारा प्रस्तुत प्रतिवेदन के आधार पर कौन समिति कार्य करती है?", answer: "B. लोक लेखा समिति" },
      { question: "79. जीईएम क्या है:-", correctAnswer: "C. माल और सेवाओं की खरीद के लिए एक ऑनलाइन मंच" },
      { question: "80. जब एक वस्तु के मूल्य में 20% की कमी की जाती है तो उसकी बिक्री में 20% की वृद्धि होती है। राजस्व पर कुल प्रभाव क्या था?", correctAnswer: "A. 4% कमी" },
      { question: "81. 'पीत क्रांति का जनक' निम्न में से किसे कहा जाता है?", correctAnswer: "B. सैम पित्रोदा" },
      { question: "82. गाड़ी खींचता हुआ घोड़ा किस बल के कारण आगे बढ़ता है ?", correctAnswer: "B. घोड़े द्वारा अपने पैरों से पृथ्वी पर आरोपित बल से" },
      { question: "83. पूंजीवादी अर्थव्यवस्था का मुख्य लक्षण निम्न में से क्या है?", correctAnswer: "A. निजी स्वामित्व" },
      { question: "84. लॉरिंज कर्व (Curve) क्या दर्शाता है?", correctAnswer: "A. आय वितरण" },
      { question: "85. सिंधु नदी द्वारा निम्नलिखित में से कौन-सा दर्रा बनाया गया है?", correctAnswer: "D. बारालाचा दर्रा" },
      { question: "86. निम्नलिखित में से कौन-सा कार्यक्रम गरीबी उन्मूलन और असमानता को कम करने के लिए 170 देशों में काम करती है।", correctAnswer: "C. यूएनडीपी" },
      { question: "87. ग्रामीण क्षेत्र में शहरी सुविधाओं का प्रावधान (Provision of urban Amenities in Rural Area-PURA) निम्न में से किसके द्वारा चलाया गया था?", correctAnswer: "C. डॉ. एपीजे अब्दुल कलाम" },
      { question: "88. O.M.R का पूर्ण रूप क्या है?", correctAnswer: "A. Optical Mark Recognition" },
      { question: "89. भारत के किस जिले में पहला कार्बन-तटस्थ गाँव विकसित किया जा रहा है?", correctAnswer: "B. बिलासपुर, छत्तीसगढ़" },
      { question: "90. झारखंड विभाजन (2000) के बाद बिहार के पहले मुख्यमंत्री निम्नलिखित में से कौन थे/थी?", correctAnswer: "D. श्री नीतीश कुमार" },
      { question: "91. यदि किसी ठोस को दो बराबर भागों में काट दिया जाए, तो दोनों अर्द्धगोलों के सम्पूर्ण पृष्ठ का योग दिए हुए गोले के पृष्ठ का निम्नलिखित में से कौन-सा भाग होगा?", correctAnswer: "C. 2 गुना" },
      { question: "92. माल और सेवाओं का उत्पादन चार प्रमुख कारकों से प्रभावित होता है। निम्नलिखित में कौन एक कारक इसमें शामिल नहीं है?", correctAnswer: "D. संगठन" },
      { question: "93. घ्राण संवेदी ग्राही किस अंग से पता लगाते हैं?", correctAnswer: "C. नाक" },
      { question: "94. निम्नलिखित में से कौन-सी मिट्टी कॉफी की खेती के लिए उपयोगी होती है?", correctAnswer: "D. लैटराइट मिट्टी" },
      { question: "95. 'ई-किसान उपज निधि' पहल का प्राथमिक उद्देश्य हैः-", correctAnswer: "C. किसानों के भंडारण रसद को आसान बनाने के लिए" },
      { question: "96. Choose the Correct Passive Voice.", correctAnswer: "A. He was being laughed at by all his friends." },
      { question: "97. निम्नलिखित में से कौन महासागरीय धारा अटलांटिक महासागर में नहीं पायी जाती है?", correctAnswer: "C. पेरु धारा" },
      { question: "98. साबुन के बुलबुले के अन्दर का दाब-", correctAnswer: "..." },
      { question: "99. महाभारत का फारसी अनुवाद पुस्तक 'रज्मनामा' निम्न में से किसकी रचना है?", correctAnswer: "D. बदायूँनी" },
      { question: "100. सोडियम यौगिक का नाम बताइए जिसका उपयोग खाद्य प्रसंस्करण में किया जाता है?", correctAnswer: "D. खाने वाला सोड़ा" }
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