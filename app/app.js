"use strict";
// CCNA QUIZES
// Author: laurence foley
// Email: lar_x87@yahoo.com

var CCNA_QUIZZES = {
  version: "",
  quizzes: [],
  quiz_in_progress: false,
  createQuiz: function(name, id, description, allquestions, time, section) {
    var quiz = new Quiz(name, id, description, allquestions, time, section);
    quiz.setStorage();
    quiz.updateQuizData();
    quiz.append(section);
    quiz.appendSavedSessions();
    this.quizzes.push(quiz);
  }
}

// Set up local storage for the first time
if (localStorage.getItem("quiz_data") === null) {
  localStorage.setItem("quiz_data", "[]");
};
