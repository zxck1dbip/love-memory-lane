
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Какой мой любимый цвет?",
      options: ["Красный", "Синий", "Зеленый", "Фиолетовый"],
      correctAnswer: 0,
      message: "Правильно! Ты так хорошо меня знаешь!",
    },
    {
      question: "Где было наше первое свидание?",
      options: ["В парке", "В кафе", "В кино", "В ресторане"],
      correctAnswer: 1,
      message: "Да! Это был такой прекрасный день!",
    },
    {
      question: "Какая моя любимая еда?",
      options: ["Пицца", "Суши", "Паста", "Салат"],
      correctAnswer: 2,
      message: "Верно! Ты помнишь такие детали!",
    },
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Результаты</h2>
        <p className="text-xl mb-4">
          Твой результат: {score} из {questions.length}
        </p>
        <p className="mb-6 text-valentine-accent">
          {score === questions.length
            ? "Идеально! Ты знаешь меня лучше всех!"
            : "Ты молодец! Давай попробуем еще раз?"}
        </p>
        <Button onClick={resetQuiz} className="glass-card">
          Начать заново
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">Проверь, как хорошо ты меня знаешь</h2>
      <Card className="p-6 glass-card">
        <h3 className="text-xl font-semibold mb-4">
          {questions[currentQuestion].question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              className="glass-card"
              variant="outline"
            >
              {option}
            </Button>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Вопрос {currentQuestion + 1} из {questions.length}
        </p>
      </Card>
    </div>
  );
};

export default Quiz;
