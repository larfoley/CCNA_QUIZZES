//==============================================================================
// QUIZZES
//------------------------------------------------------------------------------
//  paramaters: name, id, description, questions, time, section, type
//------------------------------------------------------------------------------
//==============================================================================



//====================================
// ICND 2 Quizzes
//====================================

CCNA_QUIZZES.createQuiz(
  "ICND2 Quiz 1",
  "icnd2-quiz1",
  "",
  questions.getFrom(0,15),
  "20:00",
  "icnd2"
);

CCNA_QUIZZES.createQuiz(
  "ICND2 Quiz 2",
  "icnd2-quiz2",
  "",
  questions.getFrom(16,23),
  "20:00",
  "icnd2"
);

// Final Quiz
CCNA_QUIZZES.createQuiz(
  "ICND2 Final Quiz",
  "icnd2-final-quiz",
  "This quiz will includes random questions taken from the previous quizzes.",
  questions.getRandom("icnd2"),
  "60:00",
  "icnd2",
  "random"
)

// Custom Quiz
CCNA_QUIZZES.createQuiz(
  "Custom Quiz",
  "icnd2-custom-quiz",
  "",
  (function(){
    return questions.getByTagName("hsrp", "icnd2");
  }()),
  "60:00",
  "icnd2",
  "custom"
)
