import * as React from "react";

function Pin40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M8 37h24v-2H8z" />
        <path d="M20 2c7.68 0 14 6.192 14 13.737 0 3.622-1.491 7.052-4.097 9.732L20 35.172l-.7-.685-9.22-9.035C7.49 22.789 6 19.359 6 15.737 6 8.192 12.32 2 20 2zm8.486 22.058C30.723 21.756 32 18.82 32 15.738 32 9.305 26.585 4 20 4S8 9.306 8 15.737c0 3.083 1.277 6.02 3.496 8.304L20 32.372l8.486-8.314z" />
        <path d="M20 19.503c-1.972 0-3.5-1.529-3.5-3.502 0-1.973 1.528-3.501 3.5-3.501s3.5 1.528 3.5 3.501h2c0-3.077-2.423-5.501-5.5-5.501s-5.5 2.424-5.5 5.501c0 3.078 2.423 5.502 5.5 5.502v-2z" />
      </g>
    </svg>
  );
}

export default Pin40;
