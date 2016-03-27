// Helper functions
//________________________________________

function createEl(el, class_name, content) {
  var el = document.createElement(el);
  el.className = class_name;

  if (typeof content === "function") {
    el.innerHTML = content();
  } else { el.innerHTML = content };

  return el;
}

function createButton(name, classname, callback) {
  var btn = document.createElement("button");
  btn.className = classname;
  btn.innerHTML = name;
  btn.onclick = function() {
    callback();
  }
  return btn;
}

function removeClass(el, classname) {
  var classList = el.className;
  classList = stringToArray(classList);
  for (var i = 0; i < classList.length; i++) {
   if (classList[i] === classname) {
    classList.splice(i, 1);
   }
  };
  el.className = classList.join(" ");
}


function removeClasses(classname) {
  var els = document.querySelectorAll(classname);
  for (var i = 0; i < els.length; i++) {
    els[i].className = "";
  };
}

function removeEl(el) {
  var el = document.querySelector(el);
  var parent = el.parentElement;
  parent.removeChild(el);
}

function clearHTML(classname) {
  var els = document.querySelectorAll(classname);
  for (var i = 0; i < els.length; i++) {
    els[i].innerHTML = "";
  };
};

function scrollToTop() {
  window.scrollTo( 0, 0)
}

function scrollToBottom() {
  window.scrollTo( 0, 2000);
}

function stringToArray(s) {
  var wordList = [];
  var word = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== " ") {
      word += s.charAt(i)
    };
     if (s.charAt(i + 1) === " ") {
       wordList.push(word);
       word = "";
     }
   }
  wordList.push(word);
  return wordList;
}

function toggleClass(el, classToToggle) {
  var classExists = false,
      classlist,
      classString;
  // get array of the els class names
  classlist = stringToArray(el.className);
  // check if the new class exists
  for (var i = 0; i < classlist.length; i++) {
    if (classlist[i] === classToToggle) {
      classExists = true;
      classlist.splice(i, 1);
    }
  }
  // if not, then add new class to the class list array
  if (!classExists) {
    classlist.push(classToToggle);
  }
  // add the new class
  if (classlist.length === 1) {
    el.className = classlist.join("");
  } else {
    el.className = classlist.join(" ");
  };
}

function getStorageData(key) {
  var data = localStorage.getItem(key);
  return JSON.parse(data);
}

var menuBtn = document.querySelector(".quiz-menu-button")
  menuBtn.onclick = function() {
  toggleClass(document.querySelector('.quiz-controls'), 'hide')
}

function getDateTime() {
 var now     = new Date();
 var year    = now.getFullYear();
 var month   = now.getMonth()+1;
 var day     = now.getDate();
 var hour    = now.getHours();
 var minute  = now.getMinutes();
 var second  = now.getSeconds();
 if(month.toString().length == 1) {
     var month = '0'+month;
 }
 if(day.toString().length == 1) {
     var day = '0'+day;
 }
 if(hour.toString().length == 1) {
     var hour = '0'+hour;
 }
 if(minute.toString().length == 1) {
     var minute = '0'+minute;
 }
 if(second.toString().length == 1) {
     var second = '0'+second;
 }
 var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
  return dateTime;
}
