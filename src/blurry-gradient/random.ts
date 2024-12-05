export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomArray = <T>(arr: T[], count: number) => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    const index = random(0, arr.length - 1);
    result.push(arr[index]);
  }

  return result;
};

export const randomPercent = (min: number, max: number) => {
  return random(min, max) + '%';
};

export const randomBorderRadius = () => {
  return `${randomPercent(0, 100)} ${randomPercent(0, 100)} ${randomPercent(0, 100)} ${randomPercent(0, 100)} / ${randomPercent(0, 100)} ${randomPercent(0, 100)} ${randomPercent(0, 100)} ${randomPercent(0, 100)}`;
};

export const randomTransform = () => {
  return `rotate(${random(-360, 360)}deg) scale(${random(80, 130) / 100}) translate(${random(-50, 50)}%, ${random(-50, 50)}%)`;
};

export const randomDirection = () => {
  const directions = ['top', 'right', 'bottom', 'left'];
  return randomArray(directions, 1)[0];
};

export const randomPureColor = (colors: string[]) => {
  const color = randomArray(colors, 1)[0];
  return `linear-gradient(${color}, ${color})`;
};

export const randomLinearGradient = (colors: string[]) => {
  const pickColor = randomArray(colors, 2);
  return `linear-gradient(to ${randomDirection()}, ${pickColor[0]}, ${pickColor[1]})`;
};

export const randomRadialGradient = (colors: string[]) => {
  const pickColor = randomArray(colors, 2);
  return `radial-gradient(${pickColor[0]}, ${pickColor[1]})`;
};

export const randomConicGradient = (colors: string[]) => {
  const pickColor = randomArray(colors, 2);
  return `conic-gradient(from ${random(-360, 360)}deg at ${randomPercent(0, 100)} center, ${pickColor[0]}, ${pickColor[1]})`;
};

export const randomGradientColor = (colors: string[]) => {
  const gradientType = random(0, 3);

  switch (gradientType) {
    case 0:
      return randomPureColor(colors);
    case 1:
      return randomLinearGradient(colors);
    case 2:
      return randomRadialGradient(colors);
    case 3:
      return randomConicGradient(colors);
    default:
      return randomPureColor(colors);
  }
};
