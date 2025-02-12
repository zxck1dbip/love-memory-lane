
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const MemoryLane = () => {
  // Placeholder memories - you can add your own later
  const memories = [
    {
      id: 1,
      date: "Первая встреча",
      description: "Добавьте описание вашей первой встречи",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      date: "Первое свидание",
      description: "Добавьте описание вашего первого свидания",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      date: "Особенный момент",
      description: "Добавьте описание особенного момента",
      imageUrl: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Наша история любви</h2>
      <div className="grid gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="overflow-hidden glass-card">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img
                    src={memory.imageUrl}
                    alt={memory.date}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 w-full md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{memory.date}</h3>
                  <p className="text-gray-600">{memory.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MemoryLane;
