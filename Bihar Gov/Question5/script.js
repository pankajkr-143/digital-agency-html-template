const users = [
  { username: "Khushi", password: "6205535989" },
  { username: "Aryan", password: "9570335451" },
  { username: "Khushi", password: "9508932073" },
  { username: "Guru@1234", password: "7870816431" },
  { username: "Khushi", password: "9508932073" },
  { username: "@prabhakar", password: "9708597841" },
  { username: "Rupa Yadav", password: "9263793703" },
];

function redirectToSignup() {
  window.location.href = "/Bihar Gov/SignUp/index.html"; // Replace with your actual path
}

const questions = [
    { question: "1. भारत के पहले बहुराष्ट्रीय हवाई अभ्यास का नाम क्या है, जो अगस्त 2024 में आयोजित किया जाएगा?", answer: "C. तरंग शक्ति" },
    { question: "2. अटल सुरंग रोहतांग, हिमाचल प्रदेश में खुल जाने के बाद मनाली और लेह की बीच की दूरी (किमी.) में कमी हो गयीः-", answer: "C. 46 किमी० की" },
    { question: "3. संविधन की छठी अनुसूची में चार उत्तर-पूर्वी राज्य के जनजातीय क्षेत्रों में विशेष प्रावधनों का वर्णन किया हैं। इनमें से कौन-सा राज्य इस अनुसूची में शामिल नहीं है।", answer: "C. सिक्किम" },
    { question: "4. चिकित्सा के क्षेत्रा में हरगोविंद खुराना को किस वर्ष नोबेल पुरस्कार दिया गया?", answer: "C. 1968" },
    { question: "5. जुलाई 1942 में, कांग्रेस कार्य समिति की वर्ध में बैठक हुई, जिसने एक प्रस्ताव पारित किया कि अहिंसक जनांदोलन के लिए गांधी जी को अधिकृत किया जाता है। इस प्रस्ताव को सामान्यता किस प्रस्ताव के रूप में संदर्भित करता है?", answer: "A. भारत छोड़ो प्रस्ताव" },
    { question: "6. Change into indirect narration \"The doctor said to me \"Stop smoking\"", answer: "B. The doctor adviced me to stop smoking." },
    { question: "7. वस्तु Z की सीमांत उपयोगिता 15 है और कीमत 5 है, वस्तु Y की सीमांत उपयोगिता 10 है और कीमत 2 है, तो किस वस्तु की सीमांत उपयोगिता व्यय (प्रति डॉलर) अधिक है?", answer: "B. वस्तु Y की" },
    { question: "8. जब मूल्य में 1 प्रतिशत परिवर्तन हो तथा आपूर्ति में 2 प्रतिशत परिर्वतन हो तो आपूर्ति क्या होगी?", answer: "C. लोचदार" },
    { question: "9. भारतीय 'अंगदान दिवस' प्रतिवर्ष किस तिथि को मनाया जाता हैं?", answer: "C. 3 अगस्त" },
    { question: "10. किस वर्ष रिजर्व बैंक का राष्ट्रीकरण किया गया था?", answer: "B. 1949" },
    { question: "11. कौन-सा शब्द-युग्म गलत है-", answer: "A. अगम-दुर्लभ, आगम-प्राप्ति" },
    { question: "12. निम्न में किसका आयनन विभव समूह में ऊपर से नीचे जाने पर घटता है।", answer: "B. F > Cl > Br > I" },
    { question: "13. नाभिकीय विखण्डन में कितने प्रकार की श्रृंखला-अभिक्रियांए होती है?", answer: "C. तीन" },
    { question: "14. यदि सरल लोलक की लंबाई 9 गुना बढ़ा दी जाए, तो उसके दोलन का आवर्तकाल-", answer: "D. इसके प्रारंभिक मान से 3 गुणक से बढ़ जाएगा" },
    { question: "15. कथन (A): चमगादड़ अपने शिकार को रात के अँधेरे में पकड़ सकती हैं। कारण (R): चमगादड़ पराश्रव्य तरंग को उत्सर्जित करती है तथा जब किसी वस्तु से टकराकर परावर्तित होती हैं और इसका संसूचन भी करती है", answer: "B. कथन (A) व कारण (R) दोनों सत्य परंतु कारण (R) कथन (A) की सही व्याख्या करता है।" },
    { question: "16. भारत ने किस वर्ष जलवायु परिवर्तन राष्ट्रीय कार्य योजना (National Action Plan on climate change, NAPCC) को अपनाया?", answer: "B. वर्ष 2008 में" },
    { question: "17. यदि दर का संख्यात्मक मान समय के बराबर हो तो किस दर से किसी धन का ब्याज धन 1.2 गुणा हो जायेगी?", answer: "B. 10%" },
    { question: "18. ओजोन परत के क्षरण रोकने के लिए \"मॉण्ट्रियल प्रोटोकॉल\" कनाडा में कब आयोजित किया गया था?", answer: "C. 1987 में" },
    { question: "19. वायुमंडल की संरचना के पांच परतों (क्षोभमंडल, समतापमंडल, मध्यमंडल, आयनमंडल, बर्हिमंडल) में विभाजित, किस परतों को हवाई जहाज के उड़ने के लिए आदर्श माना गया है?", answer: "C. समतापमंडल" },
    { question: "20. हेलीकल्चर (Heliculture) क्या है?", answer: "C. घोंघे का संवर्धन" },
    { question: "21. निम्नलिखित फलों में असत्य फल का उदाहरण है?", answer: "B. काजू" },
    { question: "22. Choose the most appropriate for the blank space:- 'We need two more hands to......... the heavy rush of work'", answer: "D. Cope with" },
    { question: "23. अंतर्राष्ट्रीय आर्थिक सहयोग में 'विश्व व्यापार संगठन (wto) को किस स्तंभ के रूप जाना जाता है?", answer: "C. तृतीय स्तंभ" },
    { question: "24. निम्नलिखित चरणों में भारत का 18वीं लोकसभा चुनाव सम्पन्न हुए?", answer: "B. सात चरणों" },
    { question: "25. 16 वे वित्त आयोग के अध्यक्ष कौन है?", answer: "D. अरविंद पनगढ़िया" },
    { question: "26. निम्नलिखित में किस राजवंश की प्रमुख शैली 'वेसर शैली' है?", answer: "C. चालुक्य राजवंश" },
    { question: "27. 'किताबे-नौरस' नामक पुस्तक किसने लिखी?", answer: "D. इब्राहिम आदिलशाह-II" },
    { question: "28. भारत का योजना आयोग ने पटना मेट्रो रेल परियोजना के लिए मंजूरी दी थी?", answer: "B. 14 सितंबर, 2011" },
    { question: "29. यूनिफाइड पेमेंट्स इंटरफेस (UPI) किसके द्वारा विकसित किया गया जिसका 2024 जुलाई में लेन-देन 20.64 लाख करोड़ तक पहुँच गया?", answer: "C. भारतीय राष्ट्रीय भुगतान निगम (NPCI)" },
    { question: "30. मुगल बादशाह शाहजहां ने अपने चार पुत्रों में किसे अपना उत्तराधिकारी बनाना चाहता था?", answer: "D. दाराशिकोह" },
    { question: "31. भारत में चिश्तिया सूफी मत को मोइनुद्दीन चिश्ती द्वारा स्थापित की गई थी। ख्वाजा मोइनुद्दीन चिश्ती के शिष्यों ने चिश्ति शिक्षाओं को लोकप्रिय बनाने में कार्य किया, जिन शिष्यों में शामिल नहीं थे?", answer: "D. इनमें से कोई नहीं" },
    { question: "32. जब घड़ी 5:30 घंटे दर्शाती है, तब मिनट की सुई और घंटे की सुई के बीच का कोण कितना है?", answer: "C. 15°" },
    { question: "33. एक भू-आबद्ध पत्तन है-", answer: "B. विशाखपत्तनम पत्तन" },
    { question: "34. भूतल परिवहन मंत्रालय के अधीन एक स्वायत्तशासी निकाय 'भारतीय राष्ट्रीय महामार्ग प्राधिकरण' का प्रचालन किस वर्ष प्रारंभ हुआ था?", answer: "D. वर्ष 1995" },
    { question: "35. निम्नलिखित में से हिमालय का प्रादेशिक विभाजन में शामिल नहीं है?", answer: "D. शिवलिक हिमालय" },
    { question: "36. 1, 8, 27, 64, 125, n पदों तक का समान्तर माध्य क्या है?", answer: "C. n(n+1)²/4" },
    { question: "37. 1 जनवरी, 2015 को नीति आयोग की स्थापना निम्न में से किस आयोग के स्थान पर किया गया है?", answer: "C. योजना आयोग" },
    { question: "38. निम्नलिखित में से कौन-सा युग्म देश-बुक के संदर्भ में गलत युग्म प्रदर्शित करता है?", answer: "D. ब्रिटेन-ब्लू बुक" },
    { question: "39. किस भारतीय खिलाड़ी को अंतर्राष्ट्रीय ओलंपिक समिति (IOC) द्वारा वर्ष 2024 में सम्मानित किया गया?", answer: "B. पी० टी० उषा" },
    { question: "40. मौर्यकाल में शिक्षा का सर्वाधिक प्रसिद्ध केन्द्र था?", answer: "C. तक्षशिला" },
    { question: "41. इनमें से कौन-सी नहरें संयुक्त राज्य अमरीका में नहीं अवस्थित हैं?", answer: "D. पनामा नहर" },
    { question: "42. किस लेन वाली सड़कों को 'सुपर वे 'या' फ्री वे' (Super way or free way) लेन कहते हैं?", answer: "C. छः- लेन वाली" },
    { question: "43. भारत की सबसे बड़ी मीठे पानी वाला प्राकृतिक झील है?", answer: "D. वूलर झील" },
    { question: "44. निम्नलिखित में से कौन-सी मृदा उष्णकटिबंधीय वर्षा के कारण हुए तीव्र निक्षालन (Leaching) का परिणाम है?", answer: "D. लैटेराइट मृदा" },
    { question: "45. बिहार के पटना विश्वविद्यालय में 750 छात्रों के एक सर्वेक्षण में यह पाया गया कि 580 छात्र संगीत में रूची रखते हैं और 315 छात्र नृत्य में रुचि रखते है, तो उन छात्रों की न्यूनतम संख्या कितनी है, जो संगीत और नृत्य दोनों में रूची रखते हैं?", answer: "B. 145" },
    { question: "46. 75 ओम प्रतिरोध के एक वैद्युत तार को पांच बराबर तारों के रूप में काटा जाता है। तत्पश्चात इन तारों को पार्श्वक्रम में संयोजित किया जाता है। इस संयोजन का तुल्य प्रतिरोध क्या होगा।", answer: "D. 3 Ω" },
    { question: "47. प्रभाजी आसवन विधि द्वारा पेट्रोलियम से किस घटक का निर्माण नहीं किया जाता है?", answer: "D. कोयला" },
    { question: "48. एक मिनट में हृदय द्वारा पम्प किए गए रुध्रि के मान को हृदयी उत्पादन कहते है, तो हृदय द्वारा पम्प किए गए रूधिर का मान (लीटर) होगा?", answer: "A. 5.5 लीटर" },
    { question: "49. देश का पहला तांबे से बना बापू टावर:-", answer: "C. पटना" },
    { question: "50. अक्रिय गैसों की खोज के बाद इसे मेण्डेलीपफ की आवर्त सारणी के किस वर्ग में रखा गया है?", answer: "C. वर्ग - शून्य" },
    { question: "51. इनमें से कौन-सा रेडियोएक्टिवता के मात्राक नहीं है?", answer: "C. हुण्ड" },
    { question: "52. केंद्रीय वित्त मंत्री निर्मला सीतारमण ने 23 जुलाई, 2024 को प्रस्तुत 7वां केंद्रीय बजट पेश की, जो निम्न में से किस वित्त मंत्री के बराबर उपलब्ध हासिल की-", answer: "D. मोरारजी देसाई" },
    { question: "53. समष्टि अर्थशास्त्रा; मैक्रो इकनॉमिक्सद्ध को और क्या कहा जाता है?", answer: "D. राष्ट्रीय आय का सिद्धांत" },
    { question: "54. 'सात निश्चय-भाग-2' बिहार के कार्यक्रम में शामिल नहीं हैं:-", answer: "B. स्वच्छ गांव-समृद्ध गांव" },
    { question: "55. विलासिता वस्तुओं की मांग की लोच होती हैः-", answer: "C. 1 से अधिक" },
    { question: "56. गुण संधि का उदाहरण निम्नलिखित में से किसमें है?", answer: "D. गण+ ईश" },
    { question: "57. प्रथम क्रमागत तीन सम संख्याओं का म०स० तथा ल०स० होगा-", answer: "B. 2 और 12" },
    { question: "58. बिहार के किस जिले को 'लीची उद्योग' के नाम से जाने जाते है?", answer: "C. मुजफ्फरपुर" },
    { question: "59. सीआईएसएफ और बीएसएफ द्वारा पूर्व अग्निवीरों के लिए कांस्टेबल की कितनी प्रतिशत नौकरियां आरक्षित की गई हैं?", answer: "B. 10%" },
    { question: "60. बिहार का प्राचीन इतिहास विशेष रूप से उदार और गर्वान्वित है। यहां उनके महत्वपूर्ण साम्राज्यों का केंद्र रहा है, जिसमें कौन-सा एक साम्राज्य शामिल नहीं था?", answer: "A. चालुक्य साम्राज्य" },
    { question: "61. निम्न में से अवशिष्ट पर्वत का उदाहरण है-", answer: "B. अरावली पर्वत" },
    { question: "62. सूर्य तथा क्षुद्र ग्रहों की पट्टी के बीच स्थित ग्रहों में कौन सा ग्रह शामिल नहीं है?", answer: "D. शनि" },
    { question: "63. समुद्र समीर (Sea Breeze) कहा जाता है-", answer: "A. वायु समुद्र से स्थल की ओर चलती है।" },
    { question: "64. कोपेन के अनुसार जलवायु वर्गीकरण में आर्द्र जलवायु को बड़े अक्षर से निरूपित किया गया, जिसमें कौन-सा अक्षर शामिल इसमें नहीं है?", answer: "C. E" },
    { question: "65. कांग्रेस सोशलिस्ट पार्टी की पहली बैठक पटना में हुई जिसमें अध्यक्ष थे?", answer: "B. आचार्य नरेंद्र देव" },
    { question: "66. वर्ष 2020 के अनुसार बिहार में राष्ट्रीय राजमार्गों की कुल लंबाई है-", answer: "C. 5301 कि.मी." },
    { question: "67. बिन्दु (2, 7), (4, 1) और (-2, 6) से बना त्रिभुज होगा?", answer: "A. समकोण त्रिभुज" },
    { question: "68. मैडम भिखाजी रूस्तम कामा को \"भारतीय क्रांती की जननी\" कहा जाता है, वे संबंधित थे-", answer: "A. भारतीय मूल की पारसी नागरिक" },
    { question: "69. मई 2024 को इसरो ने एडिटिव मैन्युफैक्चरिंग (एएम) तकनीकी के माध्यम से किस तरल रॉकेट इंजन का सफल परीक्षण किया?", answer: "D. PS4 इंजन" },
    { question: "70. संसद का पहला घंटा प्रश्नकाल का होता है, जिसमें प्रश्न पुछे जाते है-", answer: "B. तीन प्रकार की" },
    { question: "71. अशोक मेहता समिति की अध्यक्षता में पंचायती राज संस्थाओं पर एक समिति का गठन किया गया इसने कब अपनी रिपोर्ट सौंपी?", answer: "A. 1977 ई०" },
    { question: "72. मान ज्ञात करें- 1/(1+1/(1-1/(1+1/(1-1/(1+3)))))", answer: "B. 11/7" },
    { question: "73. जीरोप्यैलमिया रोग निम्नलिखित में से किस विटामिन के कमी से होता है?", answer: "A. विटामिन - A" },
    { question: "74. निम्नलिखित में से कौन-सी आयन F⁻ के साथ सम इलेक्ट्रॉनी नहीं है?", answer: "D. N" },
    { question: "75. प्लास्टर ऑफ पेरिस में कितने जल की मात्रा होती है?", answer: "B. 1/2H₂O" },
    { question: "76. एक सिक्के के दो बार उछाला जाता है। यदि E और F क्रमशः पहले और दूसरे उछाल में चित (हेड) आने की घटना को दर्शाते है, तो P(E∪F) किसके बराबर है?", answer: "C. 3/4" },
    { question: "77. लार्ड हार्डिंग के समय (वर्ष 1911) में बंगाल विभाजन रद्द किया गया तथा राजधानी स्थानांतरित की गई-", answer: "B. कलकता से दिल्ली" },
    { question: "78. रुपये की परिवर्तनीयता का तात्पर्य है-", answer: "A. रुपये तथा अन्य प्रमुख मुद्राओं का आपस में आजादी से परिवर्तन की अनुमति देना" },
    { question: "79. भारत निर्वाचन आयोग ने लोकसभा चुनाव 2024 के लिए किसे ब्रांड एम्बेस्डर नियुक्त किया था?", answer: "C. मैथिली ठाकुर" },
    { question: "80. वर्ष 2023-24 के मानव विकास सूचकांक में भारत का स्थान कौन-सी है-", answer: "B. 134वां" },
    { question: "81. राष्ट्रीय प्रतिदर्श सर्वेक्षण संगठन और केंद्रीय सांख्यिकी कार्यालय (CSO) की विलय मंजूरी के बाद राष्ट्रीय सांख्यिकी कार्यालय (NSO) की स्थापना किस वर्ष की गई।", answer: "C. 2019" },
    { question: "82. यूक्रेन में फंसे भारतीयों को निकालने के लिए ऑपरेशन चलाया गया:-", answer: "A. ऑपरेशन गंगा" },
    { question: "83. भारत में ग्रे क्रांति किससे संबंधित है-", answer: "B. उर्वरक उत्पादन" },
    { question: "84. धन विधेयक केवल लोकसभा में पेश किये जाने का प्रावधान भारतीय संविधन के किस अनुच्छेद में है?", answer: "C. अनुच्छेद-110" },
    { question: "85. भारत का विश्व में प्राकृतिक रबड़ उत्पादन में कौन-सा स्थान प्राप्त है?", answer: "B. तीसरा" },
    { question: "86. किस अधिनियम के द्वारा अंग्रेजी सरकार जिसको चाहे जब तक चाहे बिना मुकदमा चलाये जेल में बंद रख सकती थी इसलिए इस कानून को बिना वकील, बिना अपील, बिना दलील का कानून कहा गया?", answer: "B. रौलेट अधिनियम" },
    { question: "87. पर्वतों का अध्ययन, विज्ञान की किस शाखा के अंतगर्त होती है?", answer: "D. ओरोलॉजी" },
    { question: "88. पुस्तक 'दि ऑरिजिन ऑफ स्पीशीज' किसने लिखी है?", answer: "B. डार्विन" },
    { question: "89. हाल ही में कौन-सा राज्य समान नागरिक संहिता (यूसीसी) लागू करने वाला भारत का पहला राज्य बन गया हैं?", answer: "C. उत्तराखंड" },
    { question: "90. मानव का पसीने उत्सर्जित होता हैः-", answer: "A. स्वेद ग्रंथी" },
    { question: "91. यदि x + 1/x = 2 हो, तब sin⁻¹x का मुख्य मान होगा-", answer: "A. 90°" },
    { question: "92. विश्व की सबसे मंहगी मुद्रा निम्न देशों में से किसका है?", answer: "D. कुवैती दिनार" },
    { question: "93. प्रतिहार वंशी महेन्द्रपाल प्रथम ने लेखक राजशेखर को संरक्षण दिया था। निम्नलिखित पुस्तकों में लेखक राजशेखर से संबंधित पुस्तक नहीं है?", answer: "D. सूर्य-शतक" },
    { question: "94. निम्नलिखित में से कौन-सी योजना भारतीय जीवन बीमा निगम से संबंधित नहीं है?", answer: "D. अरोगय संजीवनी" },
    { question: "95. मणिपुर में संघर्ष का प्रमुख कारण क्या हैं?", answer: "A. मैतेई और आदिवासी समुदायों के बीच जातीय संघर्ष।" },
    { question: "96. अविभाजित बिहार खनिज संपदा के दृष्टिकोण से भारत के सबसे धनी राज्यों में से एक था। विभाजन के बाद भारत में बिहार की स्थिति पायराइट भंडार में है-", answer: "C. 95%" },
    { question: "97. निम्नलिखित में से कौन-सा अनुच्छेद राज्यपाल के नियुक्ति से संबंधित है-", answer: "D. अनुच्छेद-155" },
    { question: "98. निम्नलिखित में से कौन मूल्यह्रास को परिभाषित करता है?", answer: "D. समय के साथ टूट-फूट के कारण उपकरणों का नुकसान" },
    { question: "99. किसी वस्तु की कीमत 12 रुपये से घटकर 8 रुपये हो जाती है। इसके परिणामस्वरूप माँग की मात्रा 15 इकाइयों से बढ़कर 20 इकाइयों हो जाती है। मूल्य लोच का गुणांक ज्ञात करें-", answer: "B. 1.5" },
    { question: "100. पीनियल ग्रन्थि उत्पन्न करती है?", answer: "A. मिलेटोनिन" } 
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