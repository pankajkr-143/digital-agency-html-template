const users = [
  { username: "Khushi", password: "6205535989" },
  { username: "Aryan", password: "9570335451" },
  { username: "Khushi", password: "9508932073" },
  { username: "Guru@1234", password: "7870816431" },
  { username: "Khushi", password: "9508932073" },
  { username: "@prabhakar", password: "9708597841" },
];

function redirectToSignup() {
  window.location.href = "/Bihar Gov/SignUp/index.html"; // Replace with your actual path
}

const questions = [
    { question: "1. 1 अगस्त, 2024 से संघ लोक सेवा आयोग (UPSC) के अध्यक्ष के रूप में किसे नियुक्त किया गया हैं?", correctAnswer: "D. डॉ० मनोज सैनी" },
    { question: "2. अन्तर्राष्ट्रीय व्यापार का उद्देश्य है-", correctAnswer: "D. राष्ट्रीय आय बढ़ाना" },
    { question: "3. कुल पूर्ति की तुलना में मांग में अत्यधिक वृद्धि के परिणामस्वरूप मूल्य के सामान्य स्तर में स्थिर वृद्धि को ______ कहते हैं।", correctAnswer: "B. मांग पुश स्फीति" },
    { question: "4. भारत में सकल घरेलू उत्पाद में योगदान की दृष्टि से दूसरा सबसे बड़ा क्षेत्र कौन-सा हैं?", correctAnswer: "A. विनिर्माण" },
    { question: "5. किसी वस्तु की कीमत 6 रुपये से घटकर 4 रुपये हो जाती है। इसके परिणामस्वरूप मांग की मात्र 10 इकाइयों से बढ़कर 15 इकाइयों हो जाती है। मूल्य लोच का गुणांक ज्ञात करें?", correctAnswer: "B. 1-5" },
    { question: "6. यदि उपभोग फलन c = 150+ 0.6y और निवेश व्यय 2000 रु० है, तो राष्ट्रीय आय का संतुलन स्तर होगा?", correctAnswer: "A. 5375 रु०" },
    { question: "7. विजन इंडिया @2047 है:-<br>1. यह भारत की आर्थिक वृद्धि में योगदान दे सकते हैं।<br>2. स्वतंत्रता के एक सौ साल पूरे होने तक देश को 30 ट्रिलियन अमेरिकी डॉलर की अर्थव्यवस्था का निर्माण कर सकता है।<br>3. 1820 हजार अमेरिकी डॉलर की प्रति व्यक्ति आय प्राप्त कर सकता है।<br>4. भारत को विश्व में नंबर वन बना सकता है।<br>उपर्युक्त में से सही कथन हैः-", correctAnswer: "D. सभी 1, 2, 3, 4" },
    { question: "8. भारत में बेरोजगारी के आंकड़े कौन तैयार करता हैं?", correctAnswer: "C. राष्ट्रीय नमूना सर्वेक्षण संगठन" },
    { question: "9. 9 अगस्त से 15 अगस्त, 2024 तक चलने वाले हर घर तिरंगा अभियान का प्राथमिक उद्देश्य क्या हैं?", correctAnswer: "B. भारतीय नागरिकों में देशभक्ति को मजबूत करना।" },
    { question: "10. 'भारतीय लघु उद्योग विकास बैंक' का मुख्यालय कहाँ स्थित हैं?", correctAnswer: "D. लखनऊ" },
    { question: "11. 'वस्तु एवं सेवा कर (GST)' किस समिति के सुझाव से लागू किया गया हैं?", correctAnswer: "B. विजय केलकर समिति" },
    { question: "12. सरकार द्वारा पुरानी मुद्रा को समाप्त कर नई मुद्रा चलाना कहलाता हैं?", correctAnswer: "B. विमुद्रीकरण" },
    { question: "13. 2011 की जनगणना के अनुसार बिहार में कौन-सा जिला न्यूनतम साक्षरता दर वाला जिला हैः-", correctAnswer: "C. पूर्णिया" },
    { question: "14. निम्नलिखित देशों में से किसमें एकल प्रभुत्व एक प्रमाण है-", correctAnswer: "D. सिंगापूर" },
    { question: "15. संघ या संघों में रहने वाले लोगों के लिए नियम का समूह था?", correctAnswer: "A. सुसंविधि" },
    { question: "16. अशोक ने अपने शिलालेखों में अपने समकालीन दक्षिण के किस राजवंश का उल्लेख नहीं किया था?", correctAnswer: "B. पल्लव" },
    { question: "17. निम्नलिखित को दिल्ली पर उनके शासन के कालानुक्रम के अनुसार व्यवस्थित करे- (I) रजिया (II) बलबन (III) इल्तुतमिश (IV) नसीरुद्दीन", correctAnswer: "A. III, I, IV, II" },
    { question: "18. तृतीय आंग्ल मराठा युद्ध में कौन-सी संधि हुई थी?", correctAnswer: "A. मंदसौर की संधि" },
    { question: "19. किस मुगल शासक ने अपने डायरी में फूलपत्ती एवं बगीचा का वर्णन किया?", correctAnswer: "B. बाबर" },
    { question: "20. गांधीजी का पहला सबसे बड़ा सत्याग्रह कहाँ हुआ था?", correctAnswer: "C. बिहार" },
    { question: "21. कैबिनेट मिशन योजना (1946) के तहत तीन सदस्यीय उच्चस्तरीय शिष्टमंडल में कौन शामिल नहीं थे?", correctAnswer: "C. लॉर्ड हार्डिंग" },
    { question: "22. स्वतंत्र भारत के प्रथम भारतीय गवर्नर-जनरल तथा भारत के अंतिम गवर्नर जनरल थे?", correctAnswer: "D. सी. राजगोपालाचारी" },
    { question: "23. लॉर्ड चेम्सफोर्ड (1916-21) के शासनकाल में निम्न में से कौन सी घटना घटित नहीं हुआ था?", correctAnswer: "C. सविनय अवज्ञा आंदोलन" },
    { question: "24. वर्ष 1940 में वर्धा के निकट पावनार ग्राम से शुरू हुआ व्यक्तिगत सत्याग्रह के दूसरे सत्याग्रही थे?", correctAnswer: "B. जवाहरलाल नेहरू" },
    { question: "25. बिहार में घाघरा नदी किस स्थान पर गंगा में मिलती है?", correctAnswer: "B. छपरा के निकट" },
    { question: "26. निम्नलिखित में किन दो देशों के बीच सबसे ऊंची अंतर्राष्ट्रीय सीमा शीर्ष बिंदु फैली हुई है?", correctAnswer: "B. नेपाल-चीन" },
    { question: "27. आत्यधिक प्रचण्ड चक्रवात 'तूफान' 'उष्णकटिबंधीय चक्रवात है जो पूर्व-मध्य अरब सागर में निर्मित, जिनके कारण भारत के सर्वाधिक प्रभावित तटीय क्षेत्र है?", correctAnswer: "D. गुजरात तटीय क्षेत्र में" },
    { question: "28. भारतीय स्वतंत्रता संग्राम के बिहार दौरान मुजफ्फरपुर में किंग्सफोर्ड की हत्या का प्रयास कब किया गया था?", correctAnswer: "C. 30 अप्रैल, 1908" },
    { question: "29. स्वतंत्र भारत में एक ही औद्योगिक क्षेत्रों में दो पदक जीतने वाली पहली भारतीय महिला बनीं:-", correctAnswer: "B. मेरीकोम" },
    { question: "30. भारत की दूसरी सबसे लम्बी स्थलीय सीमा किन देशों के साथ लगती है?", correctAnswer: "A. चीन" },
    { question: "31. यह सुनिश्चित नहीं है:-", correctAnswer: "A. राइबोसोम संवेषित नहीं है।" },
    { question: "32. सबसे अच्छा प्रोबायोटिक्स है:-", correctAnswer: "C. दही" },
    { question: "33. CAR-T सेल थेरेपी सम्बंधित है:-", correctAnswer: "A. कैंसर के इलाज में प्रयोग होता है।" },
    { question: "34. सरीसृप 'डाइनोसोर' एक मध्यजीवी या मेसोजाइक महाकल्प में थे। मध्यजीवी महाकल्प में शामिल थे?", correctAnswer: "D. इनमें से सभी" },
    { question: "35. विश्व में गेहूँ का दूसरा सबसे बड़ा उत्पादक देश कौन सा है?", correctAnswer: "D. भारत" },
    { question: "36. किस देश को 'हर्मिट किंगडम' के नाम से जाना जाता है?", correctAnswer: "C. उत्तरी कोरिया" },
    { question: "37. वियतनाम की राजधानी हैः-", correctAnswer: "C. हनोई" },
    { question: "38. कांगड़ा चित्रकला शैली में किस प्रकार के चित्र की प्रधानता रहती है?", correctAnswer: "C. पौराणिक कथाओं एवं रीतिकालीन नायक-नायिकाओं का" },
    { question: "39. दुनिया के डिजिटल भुगतानों में भारत का कितना प्रतिशत हिस्सेदारी हैं?", correctAnswer: "A. 48-5%" },
    { question: "40. 'हितोपदेश' नामक पुस्तक के लेखक कौन हैं?", correctAnswer: "C. नारायण पंडित" },
    { question: "41. A Century is Not Enough किसकी रचना हैं?", correctAnswer: "C. सौरभ गांगुली" },
    { question: "42. Cu, Sn, Zn का मिश्रण है-", correctAnswer: "D. गन धातु" },
    { question: "43. निम्नलिखित तत्वों में सबसे अधिक विद्युतधनात्मक तत्व हैं?", correctAnswer: "B. Cs" },
    { question: "44. अभिप्राय दृढ या निलंबन जैसे द्रव और ठोस मिश्रण के लिए निम्न पृथक्करण प्रक्रिया है-", correctAnswer: "B. छानना" },
    { question: "45. अक्रिस्टलीय ठोस के संबंध में गलत तथ्य है-", correctAnswer: "A. इसकी ज्यामिति अवस्थित होती है" },
    { question: "46. एल्युमिनियम को तनु H<sub>2</sub>SO<sub>4</sub> के साथ गर्म करने पर क्या मुक्त करता है?", correctAnswer: "D. H<sub>2</sub>" },
    { question: "47. रक्त द्रव स्त्राव से एक अर्द्ध ठोस जेली संरचना में किस प्रक्रिया के द्वारा बदल जाती है?", correctAnswer: "D. स्कंदन" },
    { question: "48. कथन (A) : सोडियम एक नरम धातु है जो हवा में संपर्क के आने के कुछ सेकंड बाद ही धूमिल हो जाती है। कारण (R) : सोडियम कार्बनिक यौगिकों के संश्लेषण के साथ-साथ एस्टर के निर्माण के लिए आवश्यक है।", correctAnswer: "C. कथन (A) सही है, परंतु कारण (R) गलत है।" },
    { question: "49. राष्ट्रपति भवन के दरबार हॉल का नया नाम है :-", correctAnswer: "C. गणतंत्र मंडप" },
    { question: "50. Change the following sentence into direct speech from the option given below: I say that I write a letter.", correctAnswer: "B. I say, “I write a letter.”" },
    { question: "51. डॉसिंग अम्पायर के नाम से कौन जाना जाता है?", correctAnswer: "C. डेविड शेफर्ड" },
    { question: "52. S.I.M का विस्तृत रूप क्या है?", correctAnswer: "C. Subscribers Identity Module" },
    { question: "53. विश्व जल संरक्षण दिवस मनाया जाता है-", correctAnswer: "A. 22 मार्च को" },
    { question: "54. A thing of beauty is a joy for ever पंक्ति किसकी है?", correctAnswer: "B. जॉन कीट्स" },
    { question: "55. सूची-I तथा सूची-II को सुमेलित कीजिए तथा सूचियों के नीचे दिये गये कूट से सही उत्तर का चयन कीजिए-", correctAnswer: "B. A-3 B-4 C-2 D-1" }, //This question needs more context about the lists to be fully useful in a quiz
    { question: "56. किस ग्रुप के खेलों में प्रत्येक पक्ष में खिलाड़ियों की संख्या समान होती है?", correctAnswer: "D. बेसबॉल और खो-खो" },
    { question: "57. ज्ञानपीठ पुरस्कार प्राप्त करने वाला बिहार के पहले व्यक्ति रामधारी सिंह 'दिनकर' को 'उर्वशी' पुस्तक के लिए उन्हें कब पुरस्कार दिया गया।", correctAnswer: "A. 1972" },
    { question: "58. भारत के झण्डे का निर्माण पिंग्ली वेंकैया ने किया। वे किस राज्य से संबंधित थे?", correctAnswer: "D. आंध्रप्रदेश" },
    { question: "59. यूरो-2024 फाइनल किसने जीता।", correctAnswer: "B. इटली" },
    { question: "60. सेफ्रटी रेजर का आविष्कार किसने किया?", correctAnswer: "A. जिलेट" },
    { question: "61. तलवार को रखने का साधन वाक्यांश के लिए एक शब्द है-", correctAnswer: "B. म्यान" },
    { question: "62. किस समूह में सही अर्थ नहीं प्रकट करने वाले शब्द-युग्म हैं?", correctAnswer: "B. कपि-चिनी, कपि- बंदर" },
    { question: "63. शून्य में स्वतंत्र रूप से गिरने वाली वस्तुओं की/का-", correctAnswer: "A. समान त्वरण होता है" },
    { question: "64. मनुष्य वस्तु बनाने का दर्पण प्रयोग करता है?", correctAnswer: "A. अवतल दर्पण" },
    { question: "65. 200 किग्रा. भार की एक नाव पानी पर तैरती है तो विस्थापित पानी का भार होगा?", correctAnswer: "C. 200 किग्रा." },
    { question: "66. क्रोमेटोग्राफी या वर्णलेखन से संबंधी में सही है:-", correctAnswer: "B. यह रंग रसायनो के मिश्रण को पृथक करने की एक रासायनिक तकनीक है।" },
    { question: "67. नीचे दिए गए वेग-समय ग्राफ का कौन-सा भाग शून्य त्वरण/मंदन को प्रदर्शित करता है?", correctAnswer: "C. BC" }, // Needs the graph image to be meaningful
    { question: "68. एक बल्लेबाज T-20 वर्ल्ड कप 2024 में अपनी 11वीं पारी में 77 रन बनाता है, जिससे उसका औसत स्कोर 3 बढ़ जाता है। 11वीं पारी के बाद उसका औसत स्कोर होगा?", correctAnswer: "A. 46" },
    { question: "69. वर्ष 2020 में स्थापित कोलंबो सिक्योरिटी कॉन्क्लेव (सीएएसी) का उद्देश्य क्या है?", correctAnswer: "D. समुद्री सहयोग का विस्तार करना।" },
    { question: "70. दो रेलगाड़ी A और B से समान समय पर चलना प्रारंभ करती है एवं 85 किमी/घंटा और 100 किमी/घंटा की गति से एक-दूसरे की ओर बढ़ती है। जब वे मिलते हैं, तो पता चलता है कि एक रेलगाड़ी ने दूसरी रेलगाड़ी से 210 किमी. अधिक यात्रा की है, तो A और B के बीच की दूरी (किमी में) कितनी है?", correctAnswer: "A. 2590" },
    { question: "71. यदि x धनात्मक है तो श्रेणी के अनंत पदों का योग है?", correctAnswer: "C. 1" },
    { question: "72. लोकसभा 2024 के एक चुनाव में दो उम्मीदवार थे, इस चुनाव में 6% मतदाताओं ने अपने मताधिकार का प्रयोग नहीं किया। विजेता कुल मतों का 49% मत प्राप्त करके 1300 मतों से जीत गया तो इस चुनाव में कुल कितने मतदाता थे?", correctAnswer: "A. 32500" },
    { question: "73. 2 बजकर 20 मिनट पर दोनों सुइयों के बीच कोण होगा?", correctAnswer: "A. 50°" },
    { question: "74. मोबाइल एप्लिकेशन mpassport सेवा भारत के निम्नलिखित में से किस मंत्रालय द्वारा लॉन्च किया गया है?", correctAnswer: "D. विदेश मंत्रालय" },
    { question: "75. भारत में राष्ट्रीय बालिका दिवस किस तिथि को मनाया जाता है।", correctAnswer: "A. 24 जनवरी" },
    { question: "76. आधुनिक ओलंपिक खेल के संदर्भ में सही नहीं है-", correctAnswer: "C. 1896 के बाद पेरिस ओलंपिक में नॉर्मन प्रिजार्ड ने भारत का प्रतिनिधित्व किया और उसी के साथ भारत को पहली ओलंपिक उपस्थिति बन गई।" },
    { question: "77. भारतीय संविधान के किस अनुच्छेद के तहत नीति आयोग का गठन 1 जनवरी, 2015 को किया गया था?", correctAnswer: "D. अनुच्छेदों में कोई नहीं" },
    { question: "78. जम्मू-कश्मीर राज्य पुनर्गठन अधिनियम, 2019 के संदर्भ में गलत है?", correctAnswer: "C. लद्दाख को भी विधानसभा के साथ राज्य क्षेत्र बनाया गया।" },
    { question: "79. 2024 में बोइंग स्टारलाइनर के पहले चालक दल मिशन पर सवार होकर अंतरिक्ष में उड़ान भरने वाले पहले व्यक्ति थे?", correctAnswer: "A. सुनिता विलियम्स और बुच विल्मोर" },
    { question: "80. निम्नलिखित निवारक निरोध अधिनियम को काल क्रमानुसार व्यवस्थित कीजिएः<br>1. MISA<br>2. TADA<br>3. POTA<br>4. NSA", correctAnswer: "B. 1, 4, 2, 3" },
    { question: "81. संसद के अवकाश (सत्र नहीं चलने की स्थिति) में राष्ट्रपति को किस अनुच्छेद के तहत अध्यादेश जारी करने का अधिकार है?", correctAnswer: "C. अनुच्छेद-123" },
    { question: "82. सदन में किसी बैठक के लिए गणपूर्ति अध्यक्ष सहित (कोरम) कितनी होती है?", correctAnswer: "D. सदन के सदस्यों की कुल संख्या का दसवां भाग" },
    { question: "83. निम्नलिखित में सांविधिक आयोग नहीं है।", correctAnswer: "D. राष्ट्रीय मानवाधिकार आयोग" },
    { question: "84. परिसीमन आयोग के संदर्भ में गलत है-", correctAnswer: "D. परिसीमन आयोग के संबंध में अधिसूचना भारत के राष्ट्रपति द्वारा नहीं जारी किया जाता है।" },
    { question: "85. निम्नलिखित में किस संविधान संशोधन के तहत लोकसभा, राज्य विधान सभाओं और दिल्ली विधानसभा में महिलाओं के लिए एक-तिहाई सीटें आरक्षित करता है?", correctAnswer: "B. 106 वां संविधान संशोधन" },
    { question: "86. चुनाव में किस स्थिति में प्रत्याशी या उम्मीदवार की जमानत जब्त हो जाती है?", correctAnswer: "D. यदि चुनाव में कुल पडे वोटों को 1/6 फीसदी हासिल नहीं करता है।" },
    { question: "87. संविधान के किस भाग को भारतीय संविधान का मैग्नाकाटा कहा जाता है?", correctAnswer: "B. भाग-3" },
    { question: "88. 103 वां संविधान संशोधन (2019) के तहत किसे आरक्षण प्रदान किया गया-", correctAnswer: "A. सवर्ण जातियों में आर्थिक रूप से कमजोर वर्ग को" },
    { question: "89. किसी हवाई अड्डे पर प्रस्ताविक परियोजना को विश्व स्तर पर अद्वितीय बनाता है:-", correctAnswer: "C. किसी हवाई अड्डे में पहले हरित हाइड्रोजन संयंत्र" },
    { question: "90. औद्योगिक विकास की गति तेज करने के लिए मेक इन इंडिया कार्यक्रम की शुरुआत वर्ष 2014 से हुई जिसका प्रतीक निम्नलिखित में कौन-सा है?", correctAnswer: "D. कांस्य से बने शेर" },
    { question: "91. यदि सीमांत उपयोगिता प्रवृत्ति (MPC) = 0.8 है तो सीमांत बचत प्रवृत्ति (MPS) का मान होगा-", correctAnswer: "C. 0-2" },
    { question: "92. 'प्रधानमंत्री ग्राम सडक योजना' को कब प्रारंभ किया गया?", correctAnswer: "A. 25 दिसंबर, 2000" },
    { question: "93. भारत का एकमात्र सक्रिय ज्वालामुखी किस द्वीप में स्थित है?", correctAnswer: "B. बंगाल की खाड़ी" },
    { question: "94. सूची-1 तथा सूची-II को सुमेलित कीजिए तथा सूचियों के नीचे दिये गये कूट से सही उत्तर का चयन कीजिए-<br>सूची-1<br>A. भरतनाट्यम<br>B. कुचिपुड़ी<br>C. कथकली<br>D. ओडिसी<br>सूची-II<br>1. ओडिशा<br>2. केरल<br>3. आन्ध्रप्रदेश<br>4. तमिलनाडु", correctAnswer: "A. 4 3 2 1"},
    { question: "95. राष्ट्रपति द्रौपदी मुर्मू को अगस्त 2024 में अपनी यात्रा के दौरान राष्ट्रपति विलियम कैटोनीवरे ने फिजी का सर्वोच्च सम्मान प्रदान कियाः-", correctAnswer: "A. गैंड क्रॉस ऑफ द ऑर्डर ऑफ फिजी" },
    { question: "96. विश्व कप फुटबॉल का प्रथम विजेता देश है", correctAnswer: "D. उरुग्वे"},
    { question: "97. यदि 1/(a + 1/(b+1/c)) = 9/26 है, तो a+b+c का मान होगा?", correctAnswer: "A. 11"},
    { question: "98. विधान परिषद राज्य विधानमंडल का उच्च सदन होता है। इसकी स्थापना और समाप्ति का प्रावधान किस अनुच्छेद में दिया गया है?", correctAnswer: "B. अनु.-169"},
    { question: "99. भारत रत्न से सम्मानित एम. एस. सुब्बुलक्ष्मी किस संगीत से संबंधित थी?", correctAnswer: "B. कर्नाटक संगीत"},
    { question: "100. Choose the correct sentence.", correctAnswer: "B. It is high time he started earning."}
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