import React from "react";

export function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
      <path
        d="M12 7v5l3 2"
        className="fill-none stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
