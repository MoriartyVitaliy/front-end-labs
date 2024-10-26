export const handleCardMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const rotateX = (y - 0.5) * 20;
  const rotateY = (x - 0.5) * -20;
  return { x: rotateX, y: rotateY };
};

export const handleCardMouseLeave = () => {
  return { x: 0, y: 0 };
};