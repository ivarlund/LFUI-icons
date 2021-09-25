import * as React from "react";

function SvgGrowthArrow32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path
        fill="currentColor"
        d="M19.017 8v2h5.586l-7.586 7.586-5-5.001-8.707 8.708 1.414 1.414 7.293-7.293 5 5 9-9V17h2V8z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrowthArrow32;
