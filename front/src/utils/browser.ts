export const checkBackdropFilterSupport = (): boolean => {
  if (typeof window === 'undefined') return false;
  const el = document.createElement('div');
  const style = el.style;
  return 'backdropFilter' in style || 'webkitBackdropFilter' in style;
};

export const getFallbackStyle = (opacity: number) => {
  return {
    backgroundColor: `rgba(255, 255, 255, ${Math.min(opacity + 0.2, 0.95)})`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  };
};
