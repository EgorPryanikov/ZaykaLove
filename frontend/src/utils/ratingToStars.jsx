import React from 'react';
import Star from '../components/Star';

export const getStars = (rating,size = 22) => {
  return Array.from({ length: 5 }, (_, i) => {
    const gradientId = `grad-${i}-${Math.random()}`;
    if (i + 1 <= Math.floor(rating)) {
      return <Star key={i} fillPercent={1} gradientId={gradientId} size={size} />;
    } else if (i + 1 - rating < 1) {
      return <Star key={i} fillPercent={0.5} gradientId={gradientId} size={size} />;
    } else {
      return <Star key={i} fillPercent={0} gradientId={gradientId} size={size} />;
    }
  });
};