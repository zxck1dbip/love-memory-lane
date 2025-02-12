
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

const VirtualGift = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
    setTimeout(() => setShowMessage(true), 500);
  };

  return (
    <div className="text-center space-y-8 p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Твой особенный подарок
      </h2>

      <div className="min-h-[300px] flex items-center justify-center">
        {!isOpened ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={handleOpenGift}
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-center gap-4">
              <Gift className="w-16 h-16 md:w-24 md:h-24 text-valentine-accent" />
              <p className="text-lg md:text-xl text-gray-700">
                Нажми, чтобы открыть свой подарок 🎁
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="glass-card p-8 md:p-12 max-w-md mx-auto shadow-xl"
          >
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-center">
                  <Heart className="w-16 h-16 text-valentine-accent" />
                </div>
                <p className="text-xl md:text-2xl text-valentine-accent font-medium mb-4">
                  Мой самый драгоценный подарок - это ты в моей жизни ❤️
                </p>
                <p className="text-lg text-gray-700">
                  Твоя любовь делает каждый мой день особенным. Спасибо, что ты рядом 🌟
                </p>
                <div className="flex justify-center pt-4">
                  <Sparkles className="w-8 h-8 text-valentine-accent animate-pulse" />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VirtualGift;
