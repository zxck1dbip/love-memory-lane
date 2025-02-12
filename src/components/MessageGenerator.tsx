
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MessageGenerator = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "Ты делаешь каждый мой день особенным",
    "Твоя улыбка освещает мой мир",
    "С тобой я чувствую себя самым счастливым человеком",
    "Ты - лучшее, что случилось в моей жизни",
    "Каждый момент с тобой - это маленькое чудо",
    "Ты - моя любовь, моя радость, мое все",
  ];

  const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
  };

  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl font-bold mb-8">Романтические пожелания</h2>
      
      {currentMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <p className="text-xl text-valentine-accent italic">{currentMessage}</p>
        </motion.div>
      )}
      
      <Button onClick={generateMessage} className="glass-card">
        Получить пожелание
      </Button>
    </div>
  );
};

export default MessageGenerator;
