import * as React from "react";

function DigitalServices24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M15.222 2c1.682 0 2.7.993 2.774 2.652l.004.194V11h1.222c1.663 0 2.7.928 2.774 2.507l.004.185v5.616C22 21 20.949 22 19.222 22h-2.444C15.05 22 14 21 14 19.308V15h-3v2h2v2H7v-2h2v-2H4.778c-1.682 0-2.7-.993-2.774-2.652L2 12.154V4.846c0-1.709.957-2.766 2.587-2.842L4.777 2h10.445zm4 11l-2.566.002c-.54.017-.656.163-.656.69l.002 5.723c.018.474.175.585.776.585h2.444c.644 0 .778-.128.778-.692v-5.616c0-.564-.134-.692-.778-.692zM18 17a1 1 0 110 2 1 1 0 010-2zM15.34 4.002L15.223 4H4.778c-.583 0-.755.139-.776.716L4 4.846v7.308c0 .64.134.822.66.844l.118.002h9.287c.206-1.03.893-1.706 1.934-1.924L16 4.846c0-.64-.134-.822-.66-.844z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default DigitalServices24;
