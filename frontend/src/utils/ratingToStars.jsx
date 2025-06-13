import React from 'react';
import Star from '../components/Star';

export const getStars = (rating, totalStars = 5) => {
  return Array.from({ length: totalStars }, (_, i) => {
    const gradientId = `grad-${i}-${Math.random()}`;
    if (i + 1 <= Math.floor(rating)) {
      return <Star key={i} fillPercent={1} gradientId={gradientId} />;
    } else if (i + 1 - rating < 1) {
      return <Star key={i} fillPercent={0.5} gradientId={gradientId} />;
    } else {
      return <Star key={i} fillPercent={0} gradientId={gradientId} />;
    }
  });
};