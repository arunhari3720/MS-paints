const categories = [
  "reds",
  "oranges",
  "yellows",
  "greens",
  "blues",
  "violets",
];

const generateColors = () => {
  const colors = [];

  for (let i = 0; i < 500; i++) {
    const hue = Math.floor((i / 500) * 360);
    const saturation = 60 + (i % 20);
    const lightness = 35 + (i % 30);

    colors.push({
      name: `Shade ${i + 1}`,
      code: `C${1000 + i}`,
      hex: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      category: getCategory(hue),
      tone: getTone(lightness, saturation),
    });
  }

  return colors;
};

const getCategory = (hue) => {
  if (hue < 30) return "reds";
  if (hue < 60) return "oranges";
  if (hue < 90) return "yellows";
  if (hue < 150) return "greens";
  if (hue < 210) return "blues";
  return "violets";
};

const getTone = (lightness, saturation) => {
  if (lightness < 40) return "dark";
  if (lightness > 65) return "light";
  if (saturation < 60) return "neutral";
  return "vibrant";
};

export default generateColors();