import { FC } from 'react';
import { BlurryGradient, COLORS } from './blurry-gradient';

// const ITEMS = [
//   { color: 'linear-gradient(#FBF1F7, #B27CEE)' },
//   { color: 'linear-gradient(#E280AE, #c469ee)' },
//   { color: 'linear-gradient(#a443ee, #e261bb)' },
//   { color: 'linear-gradient(#e488ee, #FBF1F7)' },
// ];

// const COLORS = ['#FBF1F7', '#B27CEE', '#E280AE', '#c469ee', '#a443ee', '#e261bb', '#e488ee'];

const App: FC = () => {
  return (
    <div style={{ backgroundColor: COLORS.RED[0], width: '100vw', height: '100vh' }}>
      <BlurryGradient
        colors={[...COLORS.RED, ...COLORS.GREEN]}
        itemNumber={10}
        // items={ITEMS}
      />
    </div>
  );
};

export default App;
