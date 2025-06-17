import React from 'react';

const Star = ({ size = 22, fillPercent = 1, gradientId }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercent * 100}%`} stopColor="#F593AB" />
                <stop offset={`${fillPercent * 100}%`} stopColor="#D9D9D9" />
                <stop offset="100%" stopColor="#D9D9D9" />
            </linearGradient>
        </defs>
        <polygon
            points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
            fill={`url(#${gradientId})`}
        />
    </svg>
);
export default Star;