import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  const questionList = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteQuestion={handleDeleteItem}
    />
  ));

  function handleDeleteItem(deletedItem) {
    const updatedItem = questions.filter((item) => item.id !== deletedItem.id);
    setQuestions(updatedItem);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList} </ul>
    </section>
  );
}

export default QuestionList;
