import React from "react";

function FeatureOption() {
  return (
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 me-2 inline-block text-success"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>High-resolution image generation</span>
    </li>
  );
}

export default FeatureOption;
