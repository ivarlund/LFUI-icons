import * as React from "react";

function Bankid20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15.627 15.852h1.533c1.183 0 1.533.876 1.417 1.6-.1.706-.667 1.514-1.7 1.514H15.16l.467-3.114zm1 2.374c.517 0 .817-.253.9-.808.067-.404-.067-.808-.633-.808h-.3l-.25 1.633.283-.017zM14.027 15.852h1.083l-.483 3.098h-1.083zM10.727 15.852h.934l-.234 1.532.9-.825h1.15l-1.15 1.027.917 1.38H12.06l-.717-1.11h-.017l-.166 1.11h-.933zM7.611 16.56h.933l-.05.32c.3-.253.517-.354.817-.354.517 0 .767.32.683.858l-.25 1.582h-.933l.2-1.313c.033-.235-.033-.353-.217-.353-.15 0-.283.084-.416.252L8.16 18.95h-.933l.383-2.39zM6.728 18.983c-.467.034-.7-.017-.8-.219A1.54 1.54 0 015.11 19c-.533 0-.716-.27-.666-.59.016-.15.1-.285.25-.403.283-.253 1.016-.286 1.3-.488.016-.219-.067-.303-.334-.303-.316 0-.566.1-1.016.404l.1-.707c.383-.286.75-.404 1.183-.404.55 0 1.033.219.933.825l-.1.69c-.033.235-.033.32.233.32l-.266.64zm-.8-1.06c-.25.151-.717.134-.767.454-.016.152.067.27.217.27s.333-.068.467-.169c-.017-.05 0-.118.016-.219l.067-.336zM1.578 15.852h1.8c.767 0 .95.388.9.758-.05.286-.233.505-.583.64.433.168.6.42.533.824-.083.505-.517.876-1.083.876h-2.05l.483-3.098zm1.183 1.297c.35 0 .517-.186.55-.404.034-.236-.066-.404-.416-.404h-.317l-.133.808h.316zm-.2 1.346c.367 0 .567-.151.617-.454.033-.253-.1-.421-.45-.421h-.35l-.133.875h.317zM12.594 2H8.128l-.6 3.82h.766c.417 0 .817-.184.984-.47a.505.505 0 00.083-.236c0-.152-.1-.286-.217-.354-.3-.218-.35-.454-.35-.622v-.085c.067-.403.6-.841 1.317-.841.433 0 .75.1.95.286.166.168.25.404.2.64-.067.286-.35.521-.517.64-.433.302-.383.572-.35.656.083.235.433.387.7.387h1.167c1.583.017 2.433.74 2.15 2.457-.25 1.582-1.45 2.272-2.884 2.29l-.6 3.652h.834c3.55 0 6.432-2.306 7.016-5.925C19.493 3.801 16.66 2 12.594 2zM7.444 6.14h-.8c-.366 0-.85-.201-1-.589-.05-.134-.15-.589.467-1.026.217-.152.367-.32.383-.455a.353.353 0 00-.1-.353c-.116-.118-.383-.202-.716-.202-.567 0-.967.336-1 .572-.033.185.117.32.233.404.35.27.434.657.217 1.027-.233.37-.717.623-1.233.623h-.817c-.067.454-1.166 7.523-1.25 8.079h4.4c.017-.236.217-1.582.483-3.35l.733-4.73z" />
      </g>
    </svg>
  );
}

export default Bankid20;
