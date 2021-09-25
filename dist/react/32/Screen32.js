import * as React from "react";

function SvgScreen32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path
        d="M6.438 22.02A1.44 1.44 0 015 20.584V8.438a1.44 1.44 0 011.437-1.439h19.125A1.44 1.44 0 0127 8.439v12.146a1.44 1.44 0 01-1.438 1.436H6.438zm0-17.02A3.442 3.442 0 003 8.438v12.146a3.441 3.441 0 003.438 3.436H15V26H9v2H23v-2h-6v-1.98h8.563A3.44 3.44 0 0029 20.584V8.438a3.44 3.44 0 00-3.438-3.439H6.438z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgScreen32;
