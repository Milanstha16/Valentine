import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  emoji: string;
  color: string;
}

const emojis = ['💕', '💖', '💗', '💓', '💝', '✨', '💘', '❤️'];
const colors = ['#e11d48', '#ec4899', '#f472b6', '#d97706', '#fbbf24'];

const ConfettiHearts = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const particles: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 24 + 16,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setConfetti(particles);

    // Clean up after animation
    const timer = setTimeout(() => {
      setConfetti([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: '-50px',
            fontSize: `${particle.size}px`,
            animation: `confetti-fall ${particle.duration}s ease-out ${particle.delay}s forwards`,
            color: particle.color,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default ConfettiHearts;
