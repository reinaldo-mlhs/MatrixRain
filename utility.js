function clamp(num, min, max) {
    return num <= min
      ? min
      : num >= max
        ? max
        : num
  }
  
  const thresholdScale = generateScaleFunction(0.0, 255.0, 0.1, 1.0);
  function generateScaleFunction(prevMin, prevMax, newMin, newMax) {
    var offset = newMin - prevMin,
      scale = (newMax - newMin) / (prevMax - prevMin);
    return function (x) {
      return offset + scale * x;
    };
  };