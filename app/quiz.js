var Quiz = function(name, id, description, questions, time, section) {
  this.name = name;
  this.id = id;
  this.description = description;
  this.questions = questions;
  this.questionIndex = 0;
  this.currentQuestion = function() {
    return this.questions[this.questionIndex]
  };
  this.score = undefined;
  this.points = 0;
  this.requiredScore = 85;// percent
  this.timerId = undefined;
  this.time = time;
  this.initialTime = time;
  this.section = section;
  this.wrongAnswers = [];
  this.sessions = [];
  this.status = "";
  this.maxScore = (function(quiz) {
    var total_score = 0;
    for (var i = 0; i < quiz.questions.length; i++) {
      total_score++;
      if(quiz.questions[i].multiple_choice) {
        //total_score = total_score + 2
      } else {
        //total_score = total_score + 3
      }
    };
    return total_score;
  }(this));
}

Quiz.prototype.pages = {
  all: document.querySelectorAll('.page'),
  show: function(page) {
    var allPages = this.all;
    for (var i = 0; i < allPages.length; i++) {
      if (page !== i) {
        allPages[i].style.display = "none";
      };
    };
    allPages[page].style.display = "block";
  }
}
// START QUIZ
//------------------------------------------
Quiz.prototype.start = function() {
  console.log("Starting Quiz...");
  this.setDefault();
  clearHTML(".results-data");
  clearHTML(".quiz-data");
  removeClass(document.querySelector(".stats_score"), "perfect");
  removeClass(document.querySelector(".result"), "passed");
  this.renderQuiz();
  this.timer("start", this.time);
  this.activateControls();
}
// STOP QUIZ
//------------------------------------------
Quiz.prototype.stop = function() {
  this.setDefault();
  clearHTML(".results-data");
  clearHTML(".quiz-data");
  //this.clearTimer();
}
// SAVE QUIZ
//------------------------------------------
Quiz.prototype.save = function(_this) {
  console.log("Saving..." + " " + _this.name);
  var storageData = getStorageData("quiz_data");
  alert("Quiz Saved")
  // create a new savedData object
  var savedData = {};
  savedData.questionIndex = _this.questionIndex;
  savedData.id = "";
  savedData.timeStamp = Date.now();
  savedData.points = _this.points;
  savedData.wrongAnswers = _this.wrongAnswers;
  savedData.time = _this.time;
  savedData.timerId = _this.timerId;
  // Get quiz session data for this quiz
  for (var i = 0; i < storageData.length; i++) {
    if (storageData[i].id === _this.id) {
      // set the saved data id
      savedData.id = storageData[i].sessions.length;
      // add session data back to the local storage
      storageData[i].sessions.push(savedData);
      storageData = JSON.stringify(storageData);
      console.log(storageData);
      localStorage.setItem("quiz_data", storageData);
    }
  };
}
// APPEND SAVED SESSIONS
//------------------------------------------
Quiz.prototype.appendSavedSessions = function() {
  var _this = this;
  var quizData = getStorageData("quiz_data");
  var savedSessions = this.sessions;
  // Create the session button
  function addSessionBtn(session) {
    console.log("adding session button...");
    var quizSessions = document.querySelector("#"+_this.id + " .sessions-saved");
    console.log("cahing " + quizSessions);
    var sessionBtn = document.createElement("div");
    var resumeBtn = createEl("button", "resumeBtn", (_this.questionIndex + 1 + " of" + _this.questions.length + " left") );
    var deleteBtn = createEl("button", "deleteBtn", "Delete");

    sessionBtn.className = "sessions-saved-button cf";

    resumeBtn.onclick = function() {
      _this.resume(session);
    };

    deleteBtn.onclick = function() {
      // Delete data
      var storageData = getStorageData("quiz_data");
      for (var i = 0; i < storageData.length; i++) {
        if (storageData[i].id === _this.id) {
          storageData[i].sessions.splice(session.id, 1);
        };
      };

      localStorage.setItem("quiz_data", JSON.stringify(storageData));
      // Remove el from DOM
      this.parentElement.parentElement.removeChild(this.parentElement);
      if (_this.sessions.length === 0) {
        //delete the session html

      };
    };
    // Add the delete and resume buttons to the session button
    sessionBtn.appendChild(resumeBtn);
    sessionBtn.appendChild(deleteBtn);
    // Add the session btn to the quiz card
    console.log("appending button '" + sessionBtn + " ")
    quizSessions.appendChild(sessionBtn);
  }

  function addSessionHMTL() {
    var el = document.createElement("div");
    el.className = "sessions-overlay";
    var html = "";
    // Sessions HTML
    html += "<div class='sessions'>";
    html +=   "<button class='sessions-close'>";
    html +=     "<img src='img/close.png' width='25'>";
    html +=   "</button>";
    html +=   "<header class='sessions-header'>";
    html +=     "<h2>Saved Sessions</h2>";
    html +=   "</header>";
    html +=   "<div class='sessions-content'>";
    html +=     "<div class='sessions-saved'>";
    html +=     "</div>";
    html +=   "</div>";
    html +=   "<footer class='sessions-footer'>";
    html +=     "<button class='sessions-delete-all'>Delete All Sessions</button>";
    html +=   "</footer>";
    html +=  "</div>";
    el.innerHTML = html;
    document.querySelector("#"+_this.id).appendChild(el);

    //Add a callback to the close btn
    document.querySelector("#" + _this.id + " " + ".sessions-close").onclick = function() {
      console.log("#" + _this.id + " .sessions-overlay");
      removeClass(
        document.querySelector("#" + _this.id + " .sessions-overlay"),
        "sessions-overlay-show"
      )
    };
    //Add a callback to the deleteAll btn
    document.querySelector("#" + _this.id + " " + ".sessions-delete-all").onclick = function() {
      alert("this feature is currently not working");
    };

  }
  addSessionHMTL();
  // For every saved session add a session btn
  for (var i = 0; i < this.sessions.length; i++) {
    addSessionBtn(this.sessions[i]);

  };

   /*
    var el = document.getElementById('thingy'),
    elChild = document.createElement('div');
    elChild.innerHTML = 'Content';

    // Prepend it
    el.insertBefore(elChild, el.firstChild);
   */

};
// RESUME QUIZ
//------------------------------------------
Quiz.prototype.resume = function(session_data) {
  console.log("Resuming Quiz...");
  this.setDefault(session_data);
  clearHTML(".results-data");
  clearHTML(".quiz-data");
  removeClass(document.querySelector(".stats_score"), "perfect");
  removeClass(document.querySelector(".result"), "passed");
  this.renderQuiz();
  this.updateQuizData();
  this.timer("start");
  this.activateControls();
}
// QUIT QUIZ
//------------------------------------------
Quiz.prototype.quit = function() {
  this.stop();
  this.timer("stop");
  this.pages.show(0);
}

Quiz.prototype.renderQuiz = function() {
  console.log("Rendering Quiz...");
  this.pages.show(1);
  this.renderQuestion(this.questions[this.questionIndex]);
}

Quiz.prototype.setDefault = function(session_data) {
  console.log("Setting default settings...");
  console.log(session_data);
  if (session_data === undefined) {
    this.questionIndex = 0;
    this.score = undefined;
    this.points = 0;
    this.wrongAnswers = [];
  } else {
    this.questionIndex = session_data.questionIndex;
    this.score = undefined;
    this.points = session_data.points;
    this.wrongAnswers = session_data.wrongAnswers;
    this.time = session_data.time;
  };
};

// LOAD LOCAL STORAGE DATA INTO THE QUIZ INSTANCE
//------------------------------------------
Quiz.prototype.updateQuizData = function() {
  console.log("updating quiz data...");
  // get and parse data
  var quizData = JSON.parse(localStorage.getItem("quiz_data"));

  // Find data for this quiz instance
  for (var i = 0; i < quizData.length; i++) {

    if (quizData[i].id === this.id) {
      quizData = quizData[i]
    }

  };

  this.sessions = quizData.sessions;
  this.status = quizData.status;
  console.log("session data = " + this.sessions);

};

// TIMER
//------------------------------------------
Quiz.prototype.timer = function(option) {
  var _this = this;
  var time;
  var mins = _this.time.charAt(0) + _this.time.charAt(1);
  var secs = _this.time.charAt(3) + _this.time.charAt(4);
  mins = parseInt(mins);
  secs = parseInt(secs);
  var timerEl = document.querySelector(".timer");

  switch(option) {
    case "start":
      startTimer();
      break;
    case "stop":
      stopTimer();
      break;
    case "pause":
      pauseTimer();
      break;
    case "resume":
      resumeTimer();
    default:
      if (option !== undefined) {
        var error = "invalid option";
        error += "Valid options are: ";
        error += "start, stop, pause, resume."
        console.error(error);
      };
    break;
  }

  function renderTime(time) {
      timerEl.innerHTML = time;
  }

  function startTimer() {
    var m,s;
    renderTime(_this.time)

    _this.timerId = setInterval( function() {

      if (secs === 0) {
        secs = 60
        if (mins !== 0) {
          mins = mins - 1;
        };
      };

      secs = secs - 1;

      if (mins < 10 ) {
        m = "0" + mins;
      } else {
        m = mins
      };
      if (secs < 10 ) {
        s = "0" + secs;
      } else {
        s = secs
      }

      time = m + ":" + s;

      if (mins == 0 && secs === 0) {
        renderTime(time);
        stopTimer();
        alert("Time is up. See reults.");
        // add unanswerd questions to the wrongAnswers array
        for (var i = _this.questionIndex; i < _this.questions.length; i++) {
          // Bug: if answers is submitted when the time runs out, that question will be
          //      added to the wrong answers array
          _this.wrongAnswers.push(_this.questions[i]);
        };
        _this.wrongAnswers.push()
        _this.renderResults();
      } else {
        renderTime(time);
      }
      console.log(time);
      _this.time = time;

    }, 1000);

  }

  function stopTimer() {
    _this.time = _this.initialTime;
    clearInterval(_this.timerId);
  }

  function pauseTimer() {
    clearInterval(_this.timerId);
  }

  function resumeTimer() {
    startTimer()
  }

}

// RENDER QUESTION
//------------------------------------------
Quiz.prototype.renderQuestion = function(currentQuestion) {
  console.log("Rendering question...");
  var _this = this;
  var question = currentQuestion;
  function appendQuestion() {
    var questionNum = document.querySelector(".question-num");
    var questionTxt = document.querySelector(".question-text");
    questionNum.innerHTML = "Question " + (_this.questionIndex + 1);
    questionNum.innerHTML += " of " + _this.questions.length;
    questionTxt.innerHTML = question.question;
  };
  function appendChoices() {
    var choicesEl = document.querySelector(".choices");
    var choiceEl;
    var choiceElString = "";
    var inputType;
    choicesEl.innerHTML = "";
    // Check if question is multipleChoice
    if (_this.questions[_this.questionIndex].multiple_choice) {
      inputType = "type='checkbox'";
    } else {
      inputType = "type='radio'";
    }
    for (var i = 0; i < question.choices.length; i++) {
      choiceEl = createEl("li", "choice", function() {
        var html = "<input class='choice-input' name='choice' " + inputType;
        html += " id='" + question.choices[i].id + "' > ";
        html += "<label class='choice-wrapper cf' for='" + question.choices[i].id + "'>";
        html += "<div class='choice-id'>" + "<div>" + question.choices[i].id + "</div></div>";
        html += "<p class='choice-text'>" + question.choices[i].choice + "</p></label>";
        return html;
      })
      choicesEl.appendChild(choiceEl);
    };
  };
  function appendSubmitButton() {
    var button = createEl("button", "submitAnswerButton button", "Submit");
    button.onclick = function() {
      // Make sure thr right amount of choices are selected
      if (_this.validateAnswer()) {
        //Check answer
        _this.checkAnswer();
        // Remove classes to disable the hover and checked styles
        removeClasses(".choice-input");
        // Remove the submit button
        removeEl(".submitAnswerButton");
        // Check if there are more questions left
        if (_this.questionIndex < _this.questions.length - 1) {
          _this.appendNextButton();
        } else {
          //_this.stopQuiz();
          _this.appendResutlsButton();
        };
        scrollToBottom();
      };
    };
    document.querySelector('.submitButtons').appendChild(button);
  };
  appendQuestion();
  appendChoices();
  appendSubmitButton();
};

Quiz.prototype.appendNextButton = function() {
  var _this = this;
  var button = createEl("button", "next-button button", "Next Question");
  document.querySelector(".submitButtons").appendChild(button);
  button.onclick = function() {
    _this.questionIndex++;
    removeEl(".next-button");
    clearHTML(".answer_result")
    _this.renderQuestion(_this.questions[_this.questionIndex]);
    scrollToTop();
  }
};

Quiz.prototype.renderExplanation = function(correct) {
  var el = document.querySelector(".answer_result");
  var explanation = this.questions[this.questionIndex].explanation;
  var dropdownEl = document.createElement("div");
  dropdownEl.className = "dropdown";
  var html = "<h3 class='dropdown-label'>";
  if (correct) {
    html += "CORRECT";
  } else {
    html += "WRONG";
  };
  html += "<img src='img/caret-down.png'></h3>";
  html += "<div class='dropdown-content'>";
  html += "<p>" + explanation + "</p>";
  html += "</div>";
  dropdownEl.innerHTML = html;
  dropdownEl.onclick = function() {
    var el = document.querySelector(".dropdown-content");
    toggleClass(el, "dropdown-show");
  }
  el.appendChild(dropdownEl);
};

Quiz.prototype.validateAnswer = function() {
  var inputs = document.querySelectorAll('.choice-input');
  var question = this.currentQuestion();
  // stores the number of questions to be selected
  var requiredSelcted = question.correct_choices;
  // find out how many choices were selected
  var choicesSelected = 0;
  var error;
  for (var i = 0; i < inputs.length; i++) {
    //console.log(inputs[i].checked)
    if (inputs[i].checked) {
      choicesSelected++;
    }
  };
  if (requiredSelcted === choicesSelected) {
    return true
  } else {
    if (requiredSelcted > 1) {
     error = "You must select " + requiredSelcted + " answers";
   } else {
     error = error = "You must select " + requiredSelcted + " answer";
   }
    alert(error);
    return false;
  };
};

Quiz.prototype.checkAnswer = function() {
  console.log("Checking answer...");
  var q = this.questions[this.questionIndex];
  var correctChoices = 0;
  var requiredCorrectChoices = q.correct_choices;
  var inputs = document.querySelectorAll('.choice-input');
  var choiceEls = document.querySelectorAll(".choice");
  for (var i = 0; i < inputs.length; i++) {
    if (q.choices[i].correct) {
      choiceEls[i].className += " correct";
    }
    if (inputs[i].checked) {
      if (q.choices[i].correct) {
        correctChoices++;
      } else {
        choiceEls[i].className += " incorrect";
      };
    };
  };

  if (correctChoices === requiredCorrectChoices) {
    // Show correct ans
    this.renderExplanation(true);
    this.updatePoints();
  } else {
    this.renderExplanation(false);
    this.wrongAnswers.push(q);
  };
};

Quiz.prototype.updatePoints = function() {
  this.points++;
};

Quiz.prototype.appendResutlsButton = function() {
  //var _this = this.renderResults();
  var _this = this;
  var button = createEl("button", "results-button button", "See Results");
  document.querySelector(".submitButtons").appendChild(button);
  button.onclick = function () {
    _this.renderResults();
    scrollToTop();
  }
};

Quiz.prototype.activateControls = function() {
  var _this = this;
  var pause = document.getElementById('pause');
  var quit = document.getElementById('quit');
  var save = document.getElementById('save');
  var domState = true;
  function pauseQuiz() {
    var modal = createEl("div", "modal", function() {
      var html = "<div class='modal_content'>";
      html += "<h1>Quiz Paused</h1>";
      html += "</div>";
      return html;
    });
    var resumeBtn = createButton("Resume", "button resume", function() {
        var el = document.querySelector(".modal");
        var parent = el.parentElement;
        parent.removeChild(el);
        // Resume time
        _this.timer("start");
    });
    document.body.appendChild(modal);
    document.querySelector(".modal_content").appendChild(resumeBtn);
    // Stop Time
    _this.timer("pause");
  }
  pause.onclick = function() {
    pauseQuiz();
  };
  quit.onclick = function() {
    _this.quit();
  };
  save.onclick = function() {
    console.log(_this);
    // check if browser supports localStorage
    _this.save(_this);
  };
};

Quiz.prototype.renderResults = function(quiz) {
  var _this = this;
  var wrongAnswers = this.wrongAnswers;
  var passed = checkIfPassed();
  var resultEl = document.querySelector(".result");

  function checkIfPassed() {
    var total_score = (_this.points / _this.maxScore) * 100;
    total_score = Math.ceil(total_score);
    if ( total_score > _this.requiredScore ) {
      _this.score = total_score + "%";
      return true;
    };
    _this.score = total_score + "%";
    return false;
  };

  function quizCompleted() {
    var storageData = getStorageData("quiz_data");

    for (var i = 0; i < storageData.length; i++) {

      if (storageData[i].id === _this.id) {

        var status, quiz_data;

        passed ? status = "passed" : status = "failed";
        storageData[i].status = status;

      }

    };

   localStorage.setItem("quiz_data", JSON.stringify(storageData));

  };

  this.pages.show(2);

  if (passed) {
    resultEl.innerHTML = "CONRATULATIONS YOU PASSED";
    resultEl.className += " passed";
  } else {
    resultEl.innerHTML = "YOU FAILED";
    //resultEl.className = "failed";
  };

  document.querySelector(".stats_score")
  .innerHTML = _this.score;

  document.querySelector(".stats_required-score")
  .innerHTML = _this.requiredScore + "%";

  if (wrongAnswers.length > 0) {
    this.renderWrongAnswers();
  };

  if (this.points === this.maxScore) {

    document.querySelector(".stats_score")
    .className += " perfect";
  };

  this.renderRetakeQuizButton();
  this.renderHomeBtn();
  this.timer("stop");
  quizCompleted();
}

Quiz.prototype.renderWrongAnswers = function() {
  console.log("Loading wrong answers...");
  var wrongAnswersEl = document.querySelector('.wrong-answers');
  var wrongAnswerEl = undefined;
  var correctAnswers = [];
  var reultsHeading = document.createElement("h2");
  var html = "";
  // Append heading
  reultsHeading = "Wrong Answers";
  wrongAnswerEl.appendChild(reultsHeading);
  // Append every wrong answer
  for (var i = 0; i < this.wrongAnswers.length; i++) {
    wrongAnswerEl = document.createElement('li');
    wrongAnswerEl.className = "wrong-answer";
    html += "<h3>" + this.wrongAnswers[i].question + "</h3>";
    html += "<ul>";
    for (var j = 0; j < this.wrongAnswers[i].choices.length; j++) {
      html += "<li>";
      html += this.wrongAnswers[i].choices[j].choice;
      html += "</li>";
    };
    html += "</ul>";
    html += "<h3>Explanation</h3>";
    html += "<p>" + this.wrongAnswers[i].explanation + "</p>";
    wrongAnswerEl.innerHTML = html;
    wrongAnswersEl.appendChild(wrongAnswerEl);
  }
};

Quiz.prototype.renderHomeBtn = function() {
  var _this = this;
  var parent = document.querySelector(".results_buttons");
  var button = createEl("button", "button", "Return Home");
  button.onclick = function() {
    // stop quiz
    var perfect;
    console.log(_this);
    //console.log(this);
    if (perfect) {
      removeClass("perfect");
    }
    _this.pages.show(0);
    //_this.clearHTML();
  }
  parent.appendChild(button);
};

Quiz.prototype.renderRetakeQuizButton = function() {
  var _this = this;
  var parent = document.querySelector(".results_buttons");
  var button = createEl("button", "button", "Retake Quiz");
  parent.appendChild(button);
  button.onclick = function () {
    _this.time = _this.initialTime;
    _this.start();
  }
};
//append quizzes to the ui
Quiz.prototype.append = function(section) {
  var _this = this;

  var parentEl = document.querySelector("."+section);
  var quizCard = document.createElement("div");
  var beginBtn = document.createElement("button");
  var seeSessionsBtn = document.createElement("button");
  var sessions = [];
  var html = "";

  seeSessionsBtn.innerHTML = "Sessions";
  seeSessionsBtn.className = "button";
  seeSessionsBtn.onclick = function() {
    toggleClass(
      document.querySelector("#"+_this.id+" .sessions-overlay"),
      "sessions-overlay-show"
    );
  }

  // Quiz Meta Data
  html += "<h2>" + this.name + "</h2><hr>";
  html += "<table>";
  html +=   "<tr><th>Time</th><td>" + this.time + "</td></tr>";
  html +=   "<tr><th>Questions</th><td>" + this.questions.length + "</td></tr>";
  html += "</table>";
  html += "<p>" + this.description + "</p>";
  html += "<div class='quiz-card_buttons button-group'></buttons>";
  // Quiz card
  quizCard.className = "quiz-select_card";
  quizCard.id = _this.id;
  quizCard.innerHTML = html;
  // Start quiz btn
  beginBtn.className = "button";
  beginBtn.innerHTML = "Start Quiz";
  beginBtn.onclick = function() {
    _this.start();
  };
  // Append quiz card
  parentEl.appendChild(quizCard);
  // Append Start quiz btn
  document.querySelector("#" + _this.id + " .quiz-card_buttons")
    .appendChild(beginBtn);
  // Append sessions btn
  if (_this.sessions.length !== 0) {
    document.querySelector("#" + _this.id + " .quiz-card_buttons")
      .appendChild(seeSessionsBtn);
  };
  // Display page
  this.pages.show(0);

};

// Set default storage
Quiz.prototype.setStorage = function() {
  var storage = getStorageData("quiz_data");
  var quiz_data;
      quiz_data = {};
      quiz_data.id = this.id;
      quiz_data.sessions = [];
      quiz_data.status = "not completed";
      storage.push(quiz_data);

  storage = JSON.stringify(storage);

  localStorage.setItem("quiz_data", storage);
}
