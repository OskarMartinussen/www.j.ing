var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//COLOUR LIBRARIES
var colorTheme = [];
var candh = [
"#0018B2",
"#1938FF",
"#0022FF",
"#B28900",
"#FFC814",
"#000"
]

var drive = [
"#B23000",
"#FF4500",
"#FF4500",
"#00B290",
"#14FFD2",
"#000",
]

var fN = [
"#FFAE0D",
"#E80C4E",
"#0019FF",
"#0CE86B",
"#FFE928",
"#000"
]

var bodyOverflow = document.querySelector('body');
bodyOverflow.style.overflow = "hidden";

function onRequest(message, sender, reply) {
  console.log('get a message from background.js or popup.js', message);

  var lastDownTarget, canvas;

  if (message.action === 'new_test') {
    var body2 = document.querySelectorAll('div');
    body2.style.backgroundColor = "red";
  }

  //ACTION MESSAGES
  if (message.action === 'findingNemo_Action') {
    colorTheme = fN
    var AllBg = document.querySelectorAll('div');
    for (var i = 0; i < AllBg.length; i++) {
      var change = AllBg[i]
      change.style.backgroundColor = colorTheme[1];
    };
    console.log(colorTheme)
  }
  if (message.action === 'drive_Action') {
    colorTheme = drive
    var AllBg = document.querySelectorAll('div');
    for (var i = 0; i < AllBg.length; i++) {
      var change = AllBg[i]
      change.style.backgroundColor = colorTheme[1];
    };
    console.log(colorTheme)
  }
  if (message.action === 'calvinAndHobbes_Action') {
    colorTheme = candh
    var AllBg = document.querySelectorAll('div');
    for (var i = 0; i < AllBg.length; i++) {
      var change = AllBg[i]
      change.style.backgroundColor = colorTheme[1];
    };
    console.log(colorTheme)
  }
  if (message.action === 'on_Action') {
    alert("on");
  }
  if (message.action === 'off_Action') {
    alert("off");
  }

}


window.onload = function () {
  console.log('WWW.J.ing is a WJing tool that enables the user to manipulate the structure of any website using specific keys on their keyboard. Allowing the user to create web based visuals to all music.\
  Each key has a corresponding tag on the website. Once pressed the tag will enlarge, change colour, change position, change z index etc all randomly. When finger is lifted up from key the tag will return to its normal self. There are also three colour profiles to choose from.')
  // everycode here will be excuted on page load no matter if there is a message or not

  if(!document.getElementById('id1')) {
    var script = document.createElement('script');
    script.id = 'id1';
    script.src = '<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">';
    document.head.appendChild(script);
  }

  //Tags EVERYTHING!
  var h1Tags = Array.from(document.querySelectorAll('h1'));
  var h2Tags = Array.from(document.querySelectorAll('h2'));
  var h3Tags = Array.from(document.querySelectorAll('h3'));
  var h4Tags = Array.from(document.querySelectorAll('h4'));
  var h5Tags = Array.from(document.querySelectorAll('h5'));
  var h6Tags = Array.from(document.querySelectorAll('h6'));
  var imgTags = document.querySelectorAll('img');
  var pTags = document.querySelectorAll('p');
  var aTags = document.querySelectorAll('a');
  var spanTags = document.querySelectorAll('span');
  var emTags = document.querySelectorAll('em');
  var liTags = document.querySelectorAll('li');
  var olTags = document.querySelectorAll('ol');
  var ulTags = document.querySelectorAll('ul');
  var tableTags = document.querySelectorAll('table');


  //RUNS FOR LOOP TO UNIQUELY ID EACH TAG
  var hTags = h1Tags.concat(h2Tags, h3Tags, h4Tags, h5Tags, h6Tags);
  for (var x = 0; x < hTags.length; x++) {
    var hTag = hTags[x];
    hTag.setAttribute('id', 'hT' + (x));
    hTag.setAttribute('style', 'animation-duration: 4s');
    hTag.setAttribute('style', 'animation-name: example');
  }
  //console.log(hTags);
  for (var x = 0; x < imgTags.length; x++) {
    var imgTag = imgTags[x];
    imgTag.setAttribute('id', 'imgT' + (x));
    imgTag.setAttribute('style', 'height: 100%');
  }
  //console.log(imgTags);
  for (var x = 0; x < pTags.length; x++) {
    var pTag = pTags[x];
    pTag.setAttribute('id', 'pT' + (x));
    pTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(pTags);
  for (var x = 0; x < aTags.length; x++) {
    var aTag = aTags[x];
    aTag.setAttribute('id', 'aT' + (x));
  }
  //console.log(aTags);
  for (var x = 0; x < spanTags.length; x++) {
    var spanTag = spanTags[x];
    spanTag.setAttribute('id', 'spanT' + (x));
    aTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(spanTags);
  for (var x = 0; x < emTags.length; x++) {
  var emTag = emTags[x];
  emTag.setAttribute('id', 'emT' + (x));
  emTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(emTags);
  for (var x = 0; x < liTags.length; x++) {
    var liTag = liTags[x];
    liTag.setAttribute('id', 'liT' + (x));
    liTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(liTags);
  for (var x = 0; x < olTags.length; x++) {
    var olTag = olTags[x];
    olTag.setAttribute('id', 'olT' + (x));
    olTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(olTags);
  for (var x = 0; x < ulTags.length; x++) {
    var ulTag = ulTags[x];
    ulTag.setAttribute('id', 'ulT' + (x));
    ulTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(ulTags);
  for (var x = 0; x < tableTags.length; x++) {
    var tableTag = tableTags[x];
    tableTag.setAttribute('id', 'tableT' + (x));
    tableTag.setAttribute('style', 'font-size: 100%');
  }
  //console.log(tableTags);
  //END OF TAGGING code

  //GET RANDOM TAG FUNCTIONS
  //H
  var ranhTag;
  document.addEventListener("keydown", ranfunctionH);
  function ranfunctionH() {
  return ranhTag = Math.floor(Math.random() * hTags.length);

  };
  //IMG
  var ranImgTag;
  document.addEventListener("keydown", ranfunctionImg);
  function ranfunctionImg(){
    ranImgTag = Math.floor(Math.random() * imgTags.length);
  };
  //P
  var ranpTag;
  document.addEventListener("keydown", ranfunctionP);
  function ranfunctionP(){
    ranpTag = Math.floor(Math.random() * pTags.length);
  };
  //A
  var ranaTag;
  document.addEventListener("keydown", ranfunctionA);
  function ranfunctionA(){
    ranaTag = Math.floor(Math.random() * aTags.length);
  };
  //SPAN
  var ranspanTag;
  document.addEventListener("keydown", ranfunctionSpan);
  function ranfunctionSpan(){
    ranspanTag = Math.floor(Math.random() * spanTags.length);
  };
  //EM
  var ranemTag;
  document.addEventListener("keydown", ranfunctionEm);
  function ranfunctionEm(){
    ranemTag = Math.floor(Math.random() * emTags.length);
  };
  //LI
  var ranliTag;
  document.addEventListener("keydown", ranfunctionLi);
  function ranfunctionLi(){
    ranliTag = Math.floor(Math.random() * liTags.length);
  };
  //OL
  var ranolTag;
  document.addEventListener("keydown", ranfunctionOl);
  function ranfunctionOl(){
    ranolTag = Math.floor(Math.random() * olTags.length);
  };
  //UL
  var ranulTag;
  document.addEventListener("keydown", ranfunctionUl);
  function ranfunctionUl(){
    ranulTag = Math.floor(Math.random() * ulTags.length);
  };
  //TABLE
  var rantableTag;
  document.addEventListener("keydown", ranfunctionTable);
  function ranfunctionTable(){
    rantableTag = Math.floor(Math.random() * tableTags.length);
  };



  //TYPE LIBRARY
  var fonts = ["helvetica", "arial black", "comic sans", "fantasy", "monospace", "georgia", "impact"];

  var AllBg = document.querySelectorAll("*");
  //FOR POSITIONING OF IMAGES - GETS HEIGHT AND WIDTH
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var winHeight = window.innerHeight;
  var winWidth = window.innerWidth;
  var bodyAll = document.querySelector('body');
  bodyAll.style.zIndex = -1;

  //KEYPRESS FUNCTIONS
  document.onkeydown = function(event){
  var x = event.keyCode;
  //H
  if (x === 72) {
    var hPress = hTags[ ranhTag ];
    var ranNoTest = Math.floor(Math.random() * 6);
    var typeRanNo = Math.floor(Math.random() * 7);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    var thisType = fonts[typeRanNo];
    bodyAll.appendChild(hPress);
    hPress.style.top = ranHeight + "px";
    hPress.style.left = ranWidth + "px";
    hPress.style.marginLeft = -10 + "%";
    hPress.style.marginTop = -10 + "%";
    hPress.style.fontSize = ranWidth * 5 + "%";
    hPress.style.fontFamily = "Futura";
    hPress.style.position = "absolute";
    hPress.style.zIndex = "99999999";
    hPress.style.backgroundColor = "rgba(0,0,0,0)";
    hPress.style.color = colorTheme[ranNoTest];
  };
  //IMG
  if(x === 73) {
    var imgPress = imgTags[ ranImgTag ];
    bodyAll.appendChild(imgPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var heightCorrect = Math.floor(Math.random() * h)/3
    var ranWidth = Math.floor(Math.random() * w)/2;
    imgPress.style.height = h - heightCorrect + "px";
    imgPress.style.width = "auto";
    imgPress.style.position = "absolute";
    imgPress.style.top = ranHeight - 100 + "px";
    imgPress.style.left = ranWidth - 100 + "px";
    imgPress.style.zIndex = "99999999";
  };
  //P
  if(x === 80) {
    var pPress = pTags[ ranpTag ];
    bodyAll.appendChild(pPress);
    var ranNoTest = Math.floor(Math.random() * 6);
    var typeRanNo = Math.floor(Math.random() * 7);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranHeightCorrect = Math.floor(Math.random() * h)/3
    var ranWidthCorrect = Math.floor(Math.random() * h)/3
    var ranWidth = Math.floor(Math.random() * w)/2;
    var thisType = fonts[typeRanNo];
    pPress.style.fontFamily = thisType;
    pPress.style.top = ranHeight - ranHeightCorrect + "px";
    pPress.style.left = ranWidth - ranWidthCorrect + "px";
    pPress.style.fontSize = "300px";
    pPress.style.position = "absolute";
    pPress.style.fontFamily = "Futura";
    pPress.style.backgroundColor = "rgba(0,0,0,0)";
    pPress.style.zIndex = "99999999";
    pPress.style.color = colorTheme[ranNoTest];
  };
  //A
  if(x === 65) {
    var aPress = aTags[ ranaTag ];
    bodyAll.appendChild(aPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    aPress.style.top = ranHeight + "px";
    aPress.style.left = ranWidth + "px";
    aPress.style.fontSize = "300px";
    aPress.style.position = "absolute";
    aPress.style.fontFamily = "Futura";
    aPress.style.backgroundColor = "rgba(0,0,0,0)";
    aPress.style.zIndex = "99999999";
    aPress.style.color = colorTheme[ranNoTest];
  };
  //SPAN
  if(x === 83) {
    var spanPress = spanTags[ ranspanTag ];
    bodyAll.appendChild(spanPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    spanPress.style.top = ranHeight + "px";
    spanPress.style.left = ranWidth + "px";
    spanPress.style.fontSize = "300px";
    spanPress.style.position = "absolute";
    spanPress.style.fontFamily = "Futura";
    spanPress.style.backgroundColor = "rgba(0,0,0,0)";
    spanPress.style.zIndex = "99999999";
    spanPress.style.color = colorTheme[ranNoTest];
  };
  //EM
  if(x === 69) {
    var emPress = emTags[ ranemTag ];
    bodyAll.appendChild(emPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    emPress.style.top = ranHeight + "px";
    emPress.style.left = ranWidth + "px";
    emPress.style.fontSize = "300px";
    emPress.style.position = "absolute";
    emPress.style.fontFamily = "Futura";
    emPress.style.backgroundColor = "rgba(0,0,0,0)";
    emPress.style.zIndex = "99999999";
    emPress.style.color = colorTheme[ranNoTest];
  };
  //LI
  if(x === 76) {
    var liPress = liTags[ ranliTag ];
    bodyAll.appendChild(liPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    liPress.style.top = ranHeight + "px";
    liPress.style.left = ranWidth + "px";
    liPress.style.fontSize = "300px";
    liPress.style.position = "absolute";
    liPress.style.zIndex = "99999999";
    liPress.style.fontFamily = "Futura";
    liPress.style.backgroundColor = "rgba(0,0,0,0)";
    liPress.style.color = colorTheme[ranNoTest];
  };
  //OL
  if(x === 79) {
    var olPress = olTags[ ranolTag ];
    bodyAll.appendChild(olPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    olPress.style.top = ranHeight + "px";
    olPress.style.left = ranWidth + "px";
    olPress.style.fontSize = "300px";
    olPress.style.position = "absolute";
    olPress.style.zIndex = "99999999";
    olPress.style.fontFamily = "Futura";
    olPress.style.backgroundColor = "rgba(0,0,0,0)";
    olPress.style.color = colorTheme[ranNoTest];
  };
  //UL
  if(x === 85) {
    var ulPress = ulTags[ ranulTag ];
    bodyAll.appendChild(ulPress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    ulPress.style.top = ranHeight + "px";
    ulPress.style.left = ranWidth + "px";
    ulPress.style.fontSize = "300px";
    ulPress.style.position = "absolute";
    ulPress.style.zIndex = "99999999";
    ulPress.style.fontFamily = "Futura";
    ulPress.style.backgroundColor = "rgba(0,0,0,0)";
    ulPress.style.color = colorTheme[ranNoTest];
  };
  //TABLE
  if(x === 84) {
    var tablePress = tableTags[ rantableTag ];
    bodyAll.appendChild(tablePress);
    var ranHeight = Math.floor(Math.random() * h)/2;
    var ranWidth = Math.floor(Math.random() * w)/2;
    tablePress.style.top = ranHeight + "px";
    tablePress.style.left = ranWidth + "px";
    tablePress.style.fontSize = "300px";
    tablePress.style.position = "absolute";
    tablePress.style.zIndex = "99999999";
    tablePress.style.fontFamily = "Futura";
    tablePress.style.backgroundColor = "rgba(0,0,0,0)";
    tablePress.style.color = colorTheme[ranNoTest];
  };
  };
  //KEY UP FUNCTIONS
  document.onkeyup = function(event){
  var x = event.keyCode;
  //H
  if (x === 72) {
    var hPress = hTags[ ranhTag ];
    var oH2FontSize = hPress.getAttribute("fontSize");
    var ohPress_P = hPress.getAttribute("position");
    var ohPress_M_L = hPress.getAttribute("marginLeft");
    var ohPress_M_R = hPress.getAttribute("marginTop");
    var ohPressColour = hPress.getAttribute('color');
    var ohPressFontFam = hPress.getAttribute('fontFamily');
    var bg_color = hPress.getAttribute("backgroundColor");
    var oHChild = hPress.parentNode.nodeName;
    console.log(oHChild);
    hPress.style.fontSize = oH2FontSize;
    hPress.style.position = ohPress_P;
    hPress.style.marginLeft = ohPress_M_L;
    hPress.style.marginTop = ohPress_M_R;
    hPress.style.fontFamily = ohPressFontFam;
    hPress.style.color = ohPressColour;
    // hPress.style.backgroundColor = bg_color;
  };
  //IMG
  if (x === 73) {
    var imgPress = imgTags[ ranImgTag ];
    var oImgHeight = imgPress.getAttribute("height");
    var oImgWidth = imgPress.getAttribute("width");
    var oImgPos = imgPress.getAttribute("position");
    var oImgTop = imgPress.getAttribute('top');
    var oImgLeft = imgPress.getAttribute('left');
    var oImgChild = document.documentElement.parentNode;
    console.log(oImgChild);
    imgPress.style.position = oImgPos;
    imgPress.style.height = oImgHeight;
    imgPress.style.top = oImgTop;
    imgPress.style.left = oImgLeft;
    //imgPress.style.width = oImgWidth;
  };
  //P
  if (x === 80) {
    var pPress = pTags[ ranpTag ];
    var oPFontSize = pPress.getAttribute("fontSize");
    pPress.style.fontSize = oPFontSize;
    var oPPos = pPress.getAttribute("position");
    pPress.style.position = oPPos;
  };
  //A
  if (x === 65) {
    var aPress = aTags[ ranaTag ];
    var oAFontSize = aPress.getAttribute("fontSize");
    aPress.style.fontSize = oAFontSize;
    //var oPPos = pPress.getAttribute("position");
  };
  //SPAN
  if (x === 83) {
    var spanPress = spanTags[ ranspanTag ];
    var oSpanFontSize = spanPress.getAttribute("fontSize");
    spanPress.style.fontSize = oSpanFontSize;
    //var oPPos = pPress.getAttribute("position");
  };
  //EM
  if (x === 69) {
    var emPress = emTags[ ranemTag ];
    var oEmFontSize = emPress.getAttribute("fontSize");
    emPress.style.fontSize = oEmFontSize;
    //var oPPos = pPress.getAttribute("position");
  };
  //LI
  if (x === 76) {
    var liPress = liTags[ ranliTag ];
    var oLiFontSize = liPress.getAttribute("fontSize");
    liPress.style.fontSize = oLiFontSize;
    //var oPPos = pPress.getAttribute("position");
  };
  //OL
  if (x === 79) {
    var olPress = olTags[ ranolTag ];
    var oOlFontSize = olPress.getAttribute("fontSize");
    olPress.style.fontSize = oOlFontSize;
    //var oPPos = pPress.getAttribute("position");
  };
  //UL
  if (x === 85) {
    var ulPress = ulTags[ ranulTag ];
    var oUlFontSize = ulPress.getAttribute("fontSize");
    //var oPPos = pPress.getAttribute("position");
    ulPress.style.fontSize = oUlFontSize;
  };
  //TABLE
  if (x === 84) {
    var tablePress = tableTags[ rantableTag ];
    var oTableFontSize = tablePress.getAttribute("fontSize");
    var oTablePress_P = tablePress.getAttribute("position");
    tablePress.style.fontSize = oTableFontSize;
    tablePress.style.position = ohPress_P;
    //var oPPos = pPress.getAttribute("position");
  };
  if (x === 66) {
    for (var i = 0; i < AllBg.length; i++) {
      var change = AllBg[i];
      var oAllBg = change.getAttribute("backgroundColor");
      change.style.backgroundColor = oAllBg;
    };
  };
  };
  //END OF window ONLOAD
}


chrome.runtime.onMessage.addListener(onRequest)
