import * as React from "react";

function Tractor40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M12.163 22.479a6.44 6.44 0 110 12.88 6.44 6.44 0 010-12.88zm9.301-17.33l4.177 13.249h3.108v-7.143c0-.138-.022-.299-.062-.451a1.721 1.721 0 00-1.519-1.28l-.146-.005v-2a3.721 3.721 0 013.6 2.781c.061.233.102.477.118.716l.009.239v7.143h4.165l.068 7.413a5.08 5.08 0 11-7.487 4.108h-6.812v-1a8.52 8.52 0 00-8.52-8.52 8.524 8.524 0 00-8.125 5.947l-.076.252-1.924-.543a10.504 10.504 0 013.685-5.456V5.15h15.741zm-9.301 19.33a4.44 4.44 0 100 8.88 4.44 4.44 0 000-8.88zm20.4 2.72a3.08 3.08 0 100 6.16 3.08 3.08 0 000-6.16zM12.423 7.147l-4.701.001.001 12.232a10.495 10.495 0 014.44-.981c5.429 0 9.897 4.112 10.46 9.392l.012.127h5.428a5.08 5.08 0 014.914-2.703l-.046-4.817h-8.756l-4.177-13.25h-5.575v8.926h-2V7.147z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Tractor40;
