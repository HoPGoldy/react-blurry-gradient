import { FC, useEffect, useState } from 'react';
import { BlurryGradient, COLORS } from './blurry-gradient';

const COLOR_MAP = Object.values(COLORS);

const App: FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setColorIndex((prev) => (prev + 1) % COLOR_MAP.length);
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: COLOR_MAP[colorIndex][0],
        transition: 'all 0.5s',
        width: '100vw',
        height: '100vh',
      }}
    >
      <BlurryGradient
        colors={COLOR_MAP[colorIndex]}
        style={{ opacity: opacity, transition: 'all 0.5s' }}
      />
      <div className='title'>REACT BLURRY GRADIENT</div>
    </div>
  );
};

export default App;
