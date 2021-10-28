import * as React from "react";

function BriefcaseFirstAid70({ title, titleId, ...props }) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M8.5 20a.5.5 0 00-.5.5v35a.5.5 0 00.5.5h53a.5.5 0 00.5-.5v-35a.5.5 0 00-.5-.5h-53zM42 11a3 3 0 013 3v4h16.5a2.5 2.5 0 012.5 2.5v35a2.5 2.5 0 01-2.5 2.5h-53A2.5 2.5 0 016 55.5v-35A2.5 2.5 0 018.5 18H25v-4a3 3 0 013-3h14zm-28 9h-2v36h2V20zm44-.026h-2V56l2-.026v-36zM39 28h-8v6h-6v8h6v6h8v-6h6v-8h-6v-6zm-2 2v6h6v4h-6v6h-4v-6h-6v-4h6v-6h4zm6-14H27v2h16v-2zm-1-3H28a1 1 0 00-1 1h16a1 1 0 00-1-1z"
          id="briefcase-first-aid-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#briefcase-first-aid-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default BriefcaseFirstAid70;
