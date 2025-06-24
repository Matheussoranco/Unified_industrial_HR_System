import { useEffect, useState } from 'react';

const Streak = () => {
  const [streak, setStreak] = useState(0);
  const [lastLogin, setLastLogin] = useState<Date | null>(null);

  useEffect(() => {
    // Simular carregamento de informações do localStorage ou API
    const savedStreak = localStorage.getItem('streak') || '0';
    const savedDate = localStorage.getItem('lastLogin');
    setStreak(parseInt(savedStreak, 10));
    setLastLogin(savedDate ? new Date(savedDate) : null);
  }, []);

  useEffect(() => {
    const today = new Date();
    if (lastLogin) {
      const diffInDays = Math.floor(
        (today.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffInDays === 1) {
        // Incrementar o streak caso o usuário tenha logado no dia seguinte
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', newStreak.toString());
      } else if (diffInDays > 1) {
        // Resetar o streak caso o usuário perca um dia
        setStreak(0);
        localStorage.setItem('streak', '0');
      }
    }
    // Atualizar o último login
    localStorage.setItem('lastLogin', today.toISOString());
    setLastLogin(today);
  }, [lastLogin, streak]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Streak</h1>
      <p className="text-gray-600">
        Dias consecutivos na plataforma: <span className="font-bold">{streak}</span>
      </p>
      <div className="mt-4">
        <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${Math.min(streak, 7) * 14.28}%` }} // Assume um limite de 7 dias
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {streak >= 7 ? 'Você atingiu seu máximo de streak!' : `Continue por ${7 - streak} dias para alcançar seu objetivo!`}
        </p>
      </div>
    </div>
  );
};

export default Streak;
