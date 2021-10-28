import * as React from "react";

function CardMulticolor32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fillRule="nonzero" fill="none">
        <path
          d="M26.004 23c.619 0 1.024-.397.99-.91l.002-12.252c.03-.412-.416-.838-.992-.838H6.015C5.476 9 5 9.451 5 9.91v12.18c0 .459.476.91 1.015.91h19.989zM3 22.09V9.91C3 8.321 4.395 7 6.015 7h19.989c1.687 0 3.104 1.354 2.99 2.91l-.003 12.11c.118 1.642-1.248 2.98-2.987 2.98H6.015C4.395 25 3 23.678 3 22.09z"
          fill="#005AA0"
        />
        <path fill="#005AA0" d="M28.039 12H4.216v2h23.823z" />
        <path fill="#E30613" d="M8 18h6v-2H8z" />
      </g>
    </svg>
  );
}

export default CardMulticolor32;
