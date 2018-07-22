



function sendMessageToContent(message, callback) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    console.log('tabs', tabs)
    chrome.tabs.sendMessage(tabs[0].id, message, function(err) {
      console.log(err);
      console.log('message sent');
      if(typeof callback === "function"){
        callback();
      }
    });
  })
}





window.onload = () => {

  var findingNemo = document.querySelector("#findingNemo");
  var drive = document.querySelector("#drive");
  var calvinAndHobbes = document.querySelector("#calvinAndHobbes");
  var on = document.querySelector("#on");
  var off = document.querySelector("#off");


  var movies_class = document.querySelectorAll(".movies_class")

  findingNemo.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    for (var i = 0; i < movies_class.length; i++) {
     var changeWeight = movies_class[i]
     changeWeight.style.fontWeight = "normal";
    }
    findingNemo.style.fontWeight = "bold";


    var message = {
      action: 'findingNemo_Action'
    };

    sendMessageToContent(message);
  };
  drive.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    for (var i = 0; i < movies_class.length; i++) {
     var changeWeight = movies_class[i]
     changeWeight.style.fontWeight = "normal";
    }
    drive.style.fontWeight = "bold";

    var message = {
      action: 'drive_Action'
    };

    sendMessageToContent(message);
  };
  calvinAndHobbes.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    for (var i = 0; i < movies_class.length; i++) {
     var changeWeight = movies_class[i]
     changeWeight.style.fontWeight = "normal";
    }
    calvinAndHobbes.style.fontWeight = "bold";

    var message = {
      action: 'calvinAndHobbes_Action'
    };

    sendMessageToContent(message);
  };
  on.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    on.style.fontWeight = "bold";
    off.style.fontWeight = "normal";

    var message = {
      action: 'on_Action'
    };

    sendMessageToContent(message);
  };
  off.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    off.style.fontWeight = "bold";
    on.style.fontWeight = "normal";


    var message = {
      action: 'off_Action'
    };

    sendMessageToContent(message);
  };
  console.log('popup is loaded');
}
