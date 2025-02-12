
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2024-02-14T00:00:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="glass-card p-6 mb-8">
      <h2 className="text-2xl font-semibold text-center mb-4">
        До Дня Святого Валентина осталось:
      </h2>
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-valentine-accent">{timeLeft.days}</div>
          <div className="text-sm text-gray-600">дней</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-valentine-accent">{timeLeft.hours}</div>
          <div className="text-sm text-gray-600">часов</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-valentine-accent">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-600">минут</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-valentine-accent">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-600">секунд</div>
        </div>
      </div>
    </Card>
  );
};

export default CountdownTimer;
