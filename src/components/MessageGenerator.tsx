
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const MessageGenerator = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "Ты делаешь каждый мой день особенным ❤️",
    "Твоя улыбка освещает мой мир ✨",
    "С тобой я чувствую себя самым счастливым человеком 💑",
    "Ты - лучшее, что случилось в моей жизни 💝",
    "Каждый момент с тобой - это маленькое чудо 🌟",
    "Ты - моя любовь, моя радость, мое все 💖",
    "Спасибо, что ты есть в моей жизни 🌹",
    "Ты делаешь меня лучше каждый день 💫",
    "Наша любовь - самое прекрасное чувство 💘",
    "С тобой каждый день как праздник 🎉",
  ];

  const generateMessage = () => {
    let newMessage;
    do {
      newMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (newMessage === currentMessage);
    
    setCurrentMessage(newMessage);
  };

  return (
    <div className="text-center space-y-8 p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Романтические пожелания
      </h2>
      
      <div className="min-h-[120px] flex items-center justify-center">
        {currentMessage && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-card p-6 md:p-8 max-w-md mx-auto"
          >
            <p className="text-lg md:text-xl text-valentine-accent italic">
              {currentMessage}
            </p>
          </motion.div>
        )}
      </div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={generateMessage} 
          className="glass-card text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
        >
          <Heart className="mr-2 h-5 w-5" />
          {currentMessage ? "Другое пожелание" : "Получить пожелание"}
        </Button>
      </motion.div>
    </div>
  );
};

export default MessageGenerator;
