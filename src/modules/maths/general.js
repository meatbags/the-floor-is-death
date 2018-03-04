const Blend = (a, b, factor) => {
  return (b - a) * factor + a;
};

export { Blend };
