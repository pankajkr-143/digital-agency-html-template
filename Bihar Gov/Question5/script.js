// User login data
const users = [
    { username: "Khushi", password: "6205535989" },
    { username: "Aryan", password: "9570335451" },
    { username: "Khushi", password: "9508932073" },
    { username: "Guru@1234", password: "7870816431" },
    { username: "@prabhakar", password: "9708597841" },
    { username: "Rupa Yadav", password: "9263793703" },
];

// Correct answers for questions
const correctAnswers = {
    q1: { question: "भारत के नए कैबिनेट सचिव के रूप में किसे नियुक्त किया गया है, जो 30 अगस्त, 2024 से कार्य संभालेंगे?", correctOption: "c", correctText: "C. राजीव गौबा" },
  q2: { question: "13 अगस्त, 2014 में समाप्त हुए योजना आयोग के अंतिम उपाध्यक्ष निम्न में से कौन थे?", correctOption: "c", correctText: "C. श्री मोंटेक सिंह अहलूवालिया" },
  q3: { question: "निम्नलिखित नारों में 'आजाद हिंद फौज' के नारों में शामिल नहीं था?", correctOption: "a", correctText: "A. इंकलाब जिंदाबाद" },
  q4: { question: "ब्रिटिश साम्राज्य में विलय के समय पंजाब का महाराजा कौन था?", correctOption: "a", correctText: "A. महाराजा दीलीप सिंह" },
  q5: { question: "Choose the Correct Sentence:", correctOption: "c", correctText: "C. We have to reach on time for the Play" },
  q6: { question: "भारत का पहला और सबसे पुराना जैवमंडल आरक्षित क्षेत्र है, जिसे वर्ष 1986 में किया गया था?", correctOption: "a", correctText: "A. नीलगिरि जैवमंडल" },
  q7: { question: "निम्नलिखित में से कौन-सा ईरान की मुद्रा का नाम है?", correctOption: "d", correctText: "D. रियाल" },
  q8: { question: "मुद्रा के स्थैतिक कार्य क्या है?", correctOption: "d", correctText: "D. मूल्य का मापक पर प्रभाव" },
  q9: { question: "पेरिस ओलंपिक, 2024 में किस भारतीय पहलवान को अधिक वजन के कारण 50 किग्रा फ्रीस्टाइल कुश्ती फाईनल से अयोग्य घोषित कर दिया गया था?", correctOption: "c", correctText: "C. विनेश फोगाट" },
  q10: { question: "दो सेक्टर अर्थव्यवस्था प्रारूप में समग्र आपूर्ति होती है:", correctOption: "a", correctText: "A. C+I" },
  q11: { question: "आजीवन\" शब्द में कौन सा समास है?", correctOption: "a", correctText: "A. अव्ययीभाव" },
  q12: { question: "हिटलर का निम्नलिखित में से कौन-सा वैचारिक दृष्टिकोण था?", correctOption: "f", correctText: "F. A, B और C" },
  q13: { question: "भारतीय अर्थव्यवस्था के सकल राष्ट्रीय उत्पादन में सबसे अधिक योगदान निम्नलिखित में से कौन सा क्षेत्र करता है?", correctOption: "c", correctText: "C. तृतीयक क्षेत्र" },
  q14: { question: "राज्य विधान परिषद की सदस्य संख्या के आधार पर निम्नलिखित राज्यों में दूसरा स्थान प्राप्त है?", correctOption: "a", correctText: "A. महाराष्ट्र" },
  q15: { question: "निम्नलिखित में से किस शहर को 'पर्वतों की रानी' कहा जाता है?", correctOption: "d", correctText: "D. मसूरी" },
  q16: { question: "निम्नलिखित में से किस राज्य को दुनिया के दो सबसे बड़े धर्मों की उद्गम स्थल माना जाता है?", correctOption: "a", correctText: "A. उत्तरप्रदेश" },
  q17: { question: "स्वतंत्रता आंदोलन के दौरान 15 फरवरी, 1942 को 'जलियांवाला बाग कांड' से भी बर्बर घटना बिहार के किस स्थान पर घटित हुई थी जिसमें 34 क्रांतिकारी शहीद हुए थे?", correctOption: "d", correctText: "D. तारापुर" },
  q18: { question: "बिहार में खनिज उत्पादन के संदर्भ में निम्नलिखित स्थानों पर विचार करें:", correctOption: "d", correctText: "D. उपरोक्त तीनों" },
  q19: { question: "पंडित जवाहर लाल नेहरू के नारों/वचनों में निम्न में से कौन शामिल नहीं है?", correctOption: "a", correctText: "A. जय जवान जय किसान" },
  q20: { question: "किस मध्यकालीन संत का प्रसिद्ध ग्रंथ \"पंथ परीक्षा\" है?", correctOption: "a", correctText: "A. दादू" },
  q21: { question: "एक फोटो सेल प्रकाश की ऊर्जा को बदलता है:-", correctOption: "a", correctText: "A. विद्युत ऊर्जा" },
  q22: { question: "प्रथम विश्व युद्ध के दौरान निम्नलिखित में से कौन सा देश वर्ष 1916 के बाद मित्र देशों में शामिल हुआ था?", correctOption: "b", correctText: "B. संयुक्त राज्य अमेरिका" },
  q23: { question: "बिहार के निम्नलिखित जिलों में से किसमें आपको न्यूनतम क्षेत्रफल में अति विरल वन मिलेंगे?", correctOption: "c", correctText: "C. शेखपुरा" },
  q24: { question: "भारतीय संविधान की व्याख्या करने वाली अंतिम संस्था कौन-सी है?", correctOption: "b", correctText: "B. सुप्रीम कोर्ट" },
  q25: { question: "मुँह से फुलाने वाले गुब्बारे में निम्नलिखित में से कौन-सी गैस होती है?", correctOption: "a", correctText: "A. हीलियम" },
  q26: { question: "प्रति वर्ष चक्रवृद्धि ब्याज की किस दर पर, वार्षिक रूप से संयोजित होने पर, कोई धनराशि 2 वर्षों में 400 गुना हो जाती है?", correctOption: "d", correctText: "D. 16%" },
  q27: { question: "प्राण एवं दैहिक स्वतंत्रता का संरक्षण से संबंधित अनुच्छेद है:", correctOption: "d", correctText: "D. 21" },
  q28: { question: "इटली के 'एकीकरण की तलवार' निम्न में से किसे कहा जाता है?", correctOption: "d", correctText: "D. गैरीबाल्डी" },
  q29: { question: "विश्व की सबसे ऊंची सुरंग शिंकुन ला टनल का निर्माण कहाँ किया जा रहा है?", correctOption: "d", correctText: "D. लद्दाख" },
  q30: { question: "निम्नलिखित में से कौन-सा इलेक्ट्रॉनिक विन्याश धातु तत्वों के लिए होता है?", correctOption: "b", correctText: "B. 2, 8, 18, 2" },
  q31: { question: "लापाज राजधानी है-", correctOption: "d", correctText: "D. बोलीविया" },
  q32: { question: "मैंग्रोव जंगलों के विषय में, इनमें से कौन-सा कथन गलत है ?", correctOption: "d", correctText: "D. भारत के हरियाणा, पंजाब, बिहार राज्यों में यह वन पाये जाते है।" },
  q33: { question: "अंतर्राष्ट्रीय मुद्रा कोष (IMF) के मुख्य कार्यों में सम्मिलित नहीं है?", correctOption: "d", correctText: "D. यह सदस्य देशों को दीर्घकालिक पूंजी प्रदान करती है" },
  q34: { question: "विस्थापन-समय ग्राफ का ढलान देता है:-", correctOption: "c", correctText: "C. वेग" },
  q35: { question: "किसके परिणामस्वरूप पांचवीं शताब्दी ई. में गुप्त साम्राज्य का पतन हुआ?", correctOption: "b", correctText: "B. हूण आक्रमण के" },
  q36: { question: "निम्नलिखित में से कौन-सा तत्व सबसे अधिक प्रचुर मात्रा में समुद्र में पाया जाता है?", correctOption: "b", correctText: "B. क्लोरीन" },
  q37: { question: "चुनाव आयोग ने लोकसभा चुनाव में बड़े राज्यों के प्रत्याशियों को अपने प्रचार के लिए खर्च की छूट सीमा निर्धारित की है जो निम्नलिखित में है:-", correctOption: "d", correctText: "D. 75 लाख रु" },
  q38: { question: "टाटा मोटर्स ने वर्ष 2024 (जनवरी) में कौन-सी इलेक्ट्रिक कार लॉन्च की है?", correctOption: "d", correctText: "D. टाटा सिerrिटि" },
  q39: { question: "वर्ष 2024 में किस टीम ने कोपा अमेरिका चैम्पियनशिप जीती?", correctOption: "c", correctText: "C. अर्जेंटीना" },
  q40: { question: "बिजली से लगी आग यानी क्लास-डी प्रकार के आग बुझाने में प्रयुक्त होता है?", correctOption: "c", correctText: "C. सूखा पाउडर अग्निशामक" },
  q41: { question: "गुर्दे की कार्यात्मक इकाई है:", correctOption: "d", correctText: "D. नेफ्रॉन" },
  q42: { question: "यदि भारत के प्रधानमंत्री संसद के उच्च सदन के सदस्य हैं, तो", correctOption: "b", correctText: "B. वे अविश्वास प्रस्ताव की स्थिति में अपने पक्ष में वोट नहीं दे सकेंगे।" },
  q43: { question: "स्वचालित वाहनों में द्रवचालित ब्रेकों का इस्तेमाल वस्तुतः किस नियम का सीधा अनुप्रयोग है?", correctOption: "b", correctText: "B. पास्कल का नियम" },
  q44: { question: "निम्नलिखित में से किसके कारण किसी उत्पाद की मांग की मात्रा में परिवर्तन होगा?", correctOption: "a", correctText: "A. उत्पाद की घटती कीमत" },
  q45: { question: "निम्नलिखित में से कौन-सा कथन विपक्षी नेता के संदर्भ में गलत है?", correctOption: "d", correctText: "D. उसे कम से कम छह प्रतिशत वोट हासिल हों" },
  q46: { question: "600 मीटर की एक दौड़ में तपन, समित को 60 मीटर से हरा देता है और 500 मीटर की दौड़ में समित, मदन को 25 मीटर से हरा देता है, तो कितने मीटर से 400 मीटर की दौड़ में तपन, मदन को हरा देगा।", correctOption: "b", correctText: "B. 52 मीटर" },
  q47: { question: "‘कैसे हो’ किस वाक्य का उदाहरण है?", correctOption: "d", correctText: "D. प्रश्नवाचक" },
  q48: { question: "अस्थि खनिज घनत्व (Bone Mineral Density-BMD) परीक्षण की जाँच की जाती है:", correctOption: "d", correctText: "D. ऑस्टियोपोरोसिस की" },
  q49: { question: "जुलाई 2024 में अपनी यात्रा के दौरान पीएम मोदी को प्राप्त रूस के सर्वोच्च नागरिक पुरस्कार है:", correctOption: "d", correctText: "D. सेंट एंड्रयू द एपोस्टल का आदेश" },
  q50: { question: "उच्च न्यायालय को किसका अधीक्षण करने का अधिकार है?", correctOption: "c", correctText: "C. अधीनस्थ न्यायालय" },
  q51: { question: "सूची-I को सूची-II के साथ सुमेलित करें तथा सूचियों के नीचे दिए गए कूट का प्रयोग करते हुए सही उत्तर का चयन करें", correctOption: "a", correctText: "A. A-1, B-2, C-3, D-4" },
  q52: { question: "निम्नलिखित में से किसको \"White of the earth\" कहा जाता है?", correctOption: "b", correctText: "B. क्रस्ट (Crust)" },
  q53: { question: "हार्मोन का उदाहरण है-", correctOption: "a", correctText: "A. ऑक्सीटोसिन" },
  q54: { question: "भारत के दक्षिण पश्चिम भाग में अरब सागर से लगे सागरतट को- - कहते है।", correctOption: "d", correctText: "D. मालावार तट" },
  q55: { question: "श्रेणी (1 + x) का प्रसार है-", correctOption: "c", correctText: "C. 1-2x+3x²-4x²" },
  q56: { question: "इनमें से कौन राज्य के नीति निर्देशक सिद्धांतों में सम्मिलित नहीं है?", correctOption: "d", correctText: "D. सूचना का अधिकार" },
  q57: { question: "किस अनुच्छेद के तहत भारत में वित्त आयोग का गठन किया गया है?", correctOption: "c", correctText: "C. अनुच्छेद- 280" },
  q58: { question: "गांधी को सबसे पहले महात्मा किसने कहा था?", correctOption: "b", correctText: "B. रवींद्रनाथ टैगोर" },
  q59: { question: "19 जुलाई, 2024 को वैश्विक तकनीकी विफलता का क्या कारण था?", correctOption: "c", correctText: "C. क्राउडस्ट्राइक के इडीआर उत्पाद का एक सॉफ्टवेयर" },
  q60: { question: "पटना उच्च न्यायालय के मुख्य न्यायाधीश के पद पर आसीन सर्वप्रथम महिला न्यायाधीश कौन थी?", correctOption: "b", correctText: "B. सुश्री ज्ञान सुधा मिश्रा" },
  q61: { question: "आयोडीन युक्त हार्मोन है-", correctOption: "b", correctText: "B. थायरोक्सिन" },
  q62: { question: "'हिन्दी दिवस' मनाया जाता है:-", correctOption: "d", correctText: "D. 14 सितंबर" },
  q63: { question: "निम्नलिखित में से किसकी नियुक्ति राष्ट्रपति द्वारा नहीं की जाती है?", correctOption: "d", correctText: "D. राज्य के विधानसभा के अध्यक्ष एवं सदस्य" },
  q64: { question: "निम्नलिखित में सुमेलित नहीं है-", correctOption: "c", correctText: "C. क्लाद मोने-अमेरिका" },
  q65: { question: "गर्मी के दिनों के दौरान, मिट्टी के बर्तन में रखा पानी ठंडा हो जाता है, निम्नलिखित संवृत्ति के कारण-", correctOption: "c", correctText: "C. वाष्पीकरण" },
  q66: { question: "निम्नलिखित में से कौन 'अगस्त प्रस्ताव' का प्रस्ताव रखा था?", correctOption: "d", correctText: "D. लॉर्ड लिनलिथगो" },
  q67: { question: "किन देशों की मुद्रा प्रायः हार्ड करेन्सी होती है?", correctOption: "c", correctText: "C. विकसित देशों की" },
  q68: { question: "निम्न में से कौन-सी समिति बैंकिंग क्षेत्र में सुधारों से संबंधित है?", correctOption: "a", correctText: "A. नरसिंहन समिति" },
  q69: { question: "हैदराबाद (आंध्रप्रदेश) में उद्घाटन किए गए भारत के पहले सोलर रूफ साइक्लिंग ट्रैक का नाम क्या हैं?", correctOption: "b", correctText: "B. हेल्थेव" },
  q70: { question: "लैक्राइमल ग्रंथियाँ स्रावित करती हैः-", correctOption: "a", correctText: "A. आंसू" },
  q71: { question: "DNA का डबल हेलिक्स मॉडल किसने दिया?", correctOption: "c", correctText: "C. वाटसन व क्रिक" },
  q72: { question: "निम्नलिखित में से भारत की चौथी सर्वाधिक बोली जाने वाली भाषा है?", correctOption: "b", correctText: "B. तेलुगू" },
  q73: { question: "आयुष्मान भारत राष्ट्रीय स्वास्थ्य सुरक्षा योजना के तहत कितने रुपये तक का कवरेज प्रदान करती है?", correctOption: "a", correctText: "A. प्रति वर्ष प्रति परिवार 5 लाख" },
  q74: { question: "सूची-I (सेना) का सूची-II (आदर्श वाक्य) से सुमेलित करे तथा सूचियों के नीचे दिए गए कूट का प्रयोग करते हुए सही उत्तर का चयन करें:-<br><p><strong>सूची-I (सेना)</strong></p><p>A. वायु सेना</p><p>B. थल सेना</p><p>C. गोरखा सेना</p><p>D. नौ सेना</p><p><strong>सूची-II (आदर्श वाक्य)</strong></p><p>1. कायर की तरह जीने से मरना बेहतर है</p><p>2. सम्मान, साहस व प्रतिबद्धता</p><p>3. स्वयं से पहले सेवा</p><p>4. गौरव के साथ आकाश को छुओ</p><p><strong>कूटः-</strong></p>", correctOption: "c", correctText: "C. A-4, B-3, C-1, D-2" },
  q75: { question: "चमगादड़ किस प्रकार की ध्वनि तरंगों के परावर्तन का उत्सर्जन और अनुसंधान करके शिकार को खोजते हैं और अंधेरी रात में उड़ते हैं?", correctOption: "c", correctText: "C. अतिध्वनिक तरंगें" },
  q76: { question: "सबसे अधिक प्रयोग करने वाली दर्द निवारक दवा है-", correctOption: "a", correctText: "A. एसिटामिनोफेन" },
  q77: { question: "यदि A तथा B मिलकर किसी काम को 12 दिन में तथा B तथा C उसे 15 दिन में पूरा कर सकते हैं। यदि C की तुलना में A दोगुना अच्छा कार्य करता है, तो उस कार्य को पूरा करने में अकेला B कितने दिन लेगा?", correctOption: "d", correctText: "D. 20 दिनों" },
  q78: { question: "भारत के नियंत्रक एवं महालेखा परीक्षक द्वारा प्रस्तुत प्रतिवेदन के आधार पर कौन समिति कार्य करती है?", correctOption: "b", correctText: "B. लोक लेखा समिति" },
  q79: { question: "जीईएम क्या है:-", correctOption: "c", correctText: "C. माल और सेवाओं की खरीद के लिए एक ऑनलाइन मंच" },
  q80: { question: "जब एक वस्तु के मूल्य में 20% की कमी की जाती है तो उसकी बिक्री में 20% की वृद्धि होती है। राजस्व पर कुल प्रभाव क्या था?", correctOption: "a", correctText: "A. 4% कमी" },
  q81: { question: "'पीत क्रांति का जनक' निम्न में से किसे कहा जाता है?", correctOption: "b", correctText: "B. सैम पित्रोदा" },
  q82: { question: "गाड़ी खींचता हुआ घोड़ा किस बल के कारण आगे बढ़ता है ?", correctOption: "b", correctText: "B. घोड़े द्वारा अपने पैरों से पृथ्वी पर आरोपित बल से" },
  q83: { question: "पूंजीवादी अर्थव्यवस्था का मुख्य लक्षण निम्न में से क्या है?", correctOption: "a", correctText: "A. निजी स्वामित्व" },
  q84: { question: "लॉरिंज कर्व (Curve) क्या दर्शाता है?", correctOption: "a", correctText: "A. आय वितरण" },
  q85: { question: "सिंधु नदी द्वारा निम्नलिखित में से कौन-सा दर्रा बनाया गया है?", correctOption: "d", correctText: "D. बारालाचा दर्रा" },
  q86: { question: "निम्नलिखित में से कौन-सा कार्यक्रम गरीबी उन्मूलन और असमानता को कम करने के लिए 170 देशों में काम करती है।", correctOption: "c", correctText: "C. यूएनडीपी" },
  q87: { question: "ग्रामीण क्षेत्र में शहरी सुविधाओं का प्रावधान (Provision of urban Amenities in Rural Area-PURA) निम्न में से किसके द्वारा चलाया गया था?", correctOption: "c", correctText: "C. डॉ. एपीजे अब्दुल कलाम" },
  q88: { question: "O.M.R का पूर्ण रूप क्या है?", correctOption: "a", correctText: "A. Optical Mark Recognition" },
  q89: { question: "भारत के किस जिले में पहला कार्बन-तटस्थ गाँव विकसित किया जा रहा है?", correctOption: "b", correctText: "B. बिलासपुर, छत्तीसगढ़" },
  q90: { question: "झारखंड विभाजन (2000) के बाद बिहार के पहले मुख्यमंत्री निम्नलिखित में से कौन थे/थी?", correctOption: "d", correctText: "D. श्री नीतीश कुमार" },
  q91: { question: "यदि किसी ठोस को दो बराबर भागों में काट दिया जाए, तो दोनों अर्द्धगोलों के सम्पूर्ण पृष्ठ का योग दिए हुए गोले के पृष्ठ का निम्नलिखित में से कौन-सा भाग होगा?", correctOption: "c", correctText: "C. 2 गुना" },
  q92: { question: "माल और सेवाओं का उत्पादन चार प्रमुख कारकों से प्रभावित होता है। निम्नलिखित में कौन एक कारक इसमें शामिल नहीं है?", correctOption: "d", correctText: "D. संगठन" },
  q93: { question: "घ्राण संवेदी ग्राही किस अंग से पता लगाते हैं?", correctOption: "c", correctText: "C. नाक" },
  q94: { question: "निम्नलिखित में से कौन-सी मिट्टी कॉफी की खेती के लिए उपयोगी होती है?", correctOption: "d", correctText: "D. लैटराइट मिट्टी" },
  q95: { question: "'ई-किसान उपज निधि' पहल का प्राथमिक उद्देश्य हैः-", correctOption: "c", correctText: "C. किसानों के भंडारण रसद को आसान बनाने के लिए" },
  q96: { question: "Choose the Correct Passive Voice.", correctOption: "a", correctText: "A. He was being laughed at by all his friends." },
  q97: { question: "निम्नलिखित में से कौन महासागरीय धारा अटलांटिक महासागर में नहीं पायी जाती है?", correctOption: "c", correctText: "C. पेरु धारा" },
  q98: { question: "साबुन के बुलबुले के अन्दर का दाब-", correctOption: "a", correctText: "A. वायुमंडलीय दाब से अधिक होता है", question: "साबुन के बुलबुले के अन्दर का दाब-" }, // Kept as is, as the correct answer is missing
  q99: { question: "महाभारत का फारसी अनुवाद पुस्तक 'रज्मनामा' निम्न में से किसकी रचना है?", correctOption: "d", correctText: "D. बदायूँनी" },
  q100: { question: "सोडियम यौगिक का नाम बताइए जिसका उपयोग खाद्य प्रसंस्करण में किया जाता है?", correctOption: "d", correctText: "D. खाने वाला सोड़ा" }, 
    // Add more questions here in the same format
};

// Login functionality
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("testPage").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again!");
    }
}

// Redirect to signup page
function redirectToSignup() {
    window.location.href = "/Bihar Gov/SignUp/index.html"; // Update with the correct signup page URL
}

// Show the correct answer for a question
function showAnswer(questionId, correctAnswerText) {
    const answerDiv = document.getElementById(`answer${questionId}`);
    answerDiv.innerHTML = `<p>Correct Answer: ${correctAnswerText}</p>`;
    answerDiv.style.color = "green";
}

// Submit the test and calculate the score
function submitTest() {
    let score = 0;
    let totalQuestions = 0;
    const incorrectQuestions = [];

    // Iterate over the correct answers
    for (const questionId in correctAnswers) {
        totalQuestions++;
        const userAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        const questionData = correctAnswers[questionId];
        
        if (userAnswer && userAnswer.value === questionData.correctOption) {
            score++;
        } else {
            incorrectQuestions.push({
                question: questionData.question,
                userAnswer: userAnswer ? userAnswer.nextSibling.textContent.trim() : "No Answer",
                correctAnswer: questionData.correctText,
            });
        }
    }

    // Display results
    document.getElementById("testPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    // Summary
    const resultSummary = document.getElementById("resultSummary");
    resultSummary.innerHTML = `<p>सही उत्तर: ${score}/${totalQuestions}</p>`;

    // Incorrect Questions
    const incorrectSummary = document.getElementById("incorrectQuestionsSummary");
    if (incorrectQuestions.length > 0) {
        let incorrectDetails = "<h3>गलत उत्तर/व्याख्या:</h3>";
        incorrectQuestions.forEach((item, index) => {
            incorrectDetails += `<p>${index + 1}. ${item.question}</p>`;
            incorrectDetails += `<p>आपका उत्तर: ${item.userAnswer}</p>`;
            incorrectDetails += `<p>सही उत्तर: ${item.correctAnswer}</p>`;
            incorrectDetails += "<hr>";
        });
        incorrectSummary.innerHTML = incorrectDetails;
    } else {
        incorrectSummary.innerHTML = `<p>All answers are correct. Well done!</p>`;
    }
}

// Restart the test
function restartTest() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("testPage").style.display = "block";

    // Reset selected answers
    const inputs = document.querySelectorAll("input[type='radio']");
    inputs.forEach((input) => {
        input.checked = false;
    });

    // Clear answers shown
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
        answer.innerHTML = "";
    });
}
