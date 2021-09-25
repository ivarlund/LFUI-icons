import * as React from "react";

function SvgCalendarCross24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M19 7H5V5.33c0-.181.161-.326.346-.33H8v1h2V5h4v1h2V5h2.634c.205.004.366.149.366.33V7zm0 11.662a.331.331 0 01-.346.338H5.346A.331.331 0 015 18.662V9h14v9.662zM16 3V2h-2v1h-4V2H8v1H5.325C4.021 3.026 3 4.05 3 5.33v13.332A2.317 2.317 0 005.346 21h13.308A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.304-2.346-2.33H16z" />
        <path d="M9.965 17.45L12 15.415l2.035 2.035 1.414-1.414L13.414 14l2-2.001L14 10.586l-2 2-2-2L8.586 12l2 2-2.035 2.036z" />
      </g>
    </svg>
  );
}

export default SvgCalendarCross24;
