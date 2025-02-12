
import { useState, useEffect } from "react";
import { Heart, Gift, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MemoryLane from "@/components/MemoryLane";
import Quiz from "@/components/Quiz";
import MessageGenerator from "@/components/MessageGenerator";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<string>("memories");
  const [hearts, setHearts] = useState<Array<{ id: number; style: any }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = {
        id: Date.now(),
        style: {
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 2}s`,
        },
      };
      setHearts((prevHearts) => [...prevHearts, heart]);
      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.filter((h) => h.id !== heart.id)
        );
      }, 3000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "memories":
        return <MemoryLane />;
      case "quiz":
        return <Quiz />;
      case "messages":
        return <MessageGenerator />;
      default:
        return <MemoryLane />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-light to-valentine-primary">
      <div className="floating-hearts">
        {hearts.map((heart) => (
          <div key={heart.id} className="heart" style={heart.style} />
        ))}
      </div>
      
      <div className="container px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-valentine-accent mb-4">
            С любовью для тебя
          </h1>
          <p className="text-lg text-gray-600">Счастливого Дня Святого Валентина!</p>
        </div>

        <CountdownTimer />

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            variant={activeSection === "memories" ? "default" : "outline"}
            onClick={() => setActiveSection("memories")}
            className="glass-card"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Наши воспоминания
          </Button>
          <Button
            variant={activeSection === "quiz" ? "default" : "outline"}
            onClick={() => setActiveSection("quiz")}
            className="glass-card"
          >
            <Heart className="mr-2 h-4 w-4" />
            Викторина
          </Button>
          <Button
            variant={activeSection === "messages" ? "default" : "outline"}
            onClick={() => setActiveSection("messages")}
            className="glass-card"
          >
            <Gift className="mr-2 h-4 w-4" />
            Пожелания
          </Button>
        </div>

        <Card className="glass-card p-6">
          {renderSection()}
        </Card>
      </div>
    </div>
  );
};

export default Index;
