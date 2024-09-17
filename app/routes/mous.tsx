import { useEffect, useState } from 'react';

const MouseEffect = () => {

  // Используем хук useState для хранения координат мыши
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Создаем состояние для хранения цвета фона

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Добавляем слушатель событий движения мыши
    window.addEventListener('mousemove', handleMouseMove);

    // Чистим слушатель событий, когда компонент размонтируется
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };


  return (
    <div
      className='pointer-events-none h-screen w-screen inset-0 z-30 transition duration-300 fixed'
      style={gradientStyle}>
    </div>
  );
};

export default MouseEffect;




