import * as React from "react";

function ReportPerson50({ title, titleId, ...props }) {
  return (
    <svg width={70} height={50} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M47.256 33c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13c3.838 0 7.402 1.672 9.858 4.525l1.516-1.304A14.966 14.966 0 0034.256 18c-8.284 0-15 6.716-15 15 0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15a14.98 14.98 0 00-.818-4.898l-.218-.574-.244-.645h-10.49c-2.876 0-4.867-.76-6.173-2.004a5.109 5.109 0 01-1.005-1.31c-.132-.25-.2-.43-.22-.503l-1.932.515c.196.735.732 1.75 1.778 2.746 1.687 1.606 4.173 2.556 7.553 2.556h9.104c.435 1.296.665 2.69.665 4.117z"
          fill="#005AA0"
        />
        <path
          d="M36 38.192c-.39 0-.532-.056-.946-.332-.711-.473-1.195-.667-2.054-.667-.859 0-1.342.194-2.054.667-.413.276-.555.332-.946.332-.391 0-.533-.056-.946-.332-.711-.473-1.195-.667-2.054-.667v2c.39 0 .532.057.946.332.711.474 1.195.667 2.054.667.859 0 1.343-.193 2.054-.667.414-.275.555-.332.946-.332.391 0 .533.057.946.332.711.474 1.195.667 2.054.667v-2zM36 40.189c.859 0 1.342-.194 2.054-.667.413-.276.555-.332.946-.332.39 0 .532.057.945.332.712.473 1.196.667 2.055.667v-2c-.391 0-.533-.057-.946-.332-.712-.474-1.195-.667-2.054-.667-.86 0-1.343.193-2.054.667-.414.275-.555.332-.946.332v2zM27 30a2.612 2.612 0 005.223 0h-2A.611.611 0 0129 30h-2zM36 30a2.611 2.611 0 105.223 0h-2A.611.611 0 0138 30h-2z"
          fill="#005AA0"
        />
        <path
          d="M28.996 2.846c.5.415.5 1.181 0 1.596a3.037 3.037 0 000 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.5-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.278 1.538z"
          fill="#E30613"
        />
        <path
          d="M33.664 2.846c.5.415.5 1.181 0 1.596a3.037 3.037 0 000 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.5-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.278 1.538zM38.333 2.846c.499.415.499 1.181 0 1.596a3.037 3.037 0 00-.001 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.499-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.277 1.538z"
          fill="#005AA0"
        />
      </g>
    </svg>
  );
}

export default ReportPerson50;
