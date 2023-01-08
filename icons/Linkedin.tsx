import React from "react";

const Linkedin: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="#0077B5"
      {...props}
    >
      <path
        d="M5.82029 26H0.429929V8.64128H5.82029V26ZM3.12186 6.27343C1.39843 6.27343 0 4.84529 0 3.12186C0 1.39843 1.3975 0 3.12186 0C4.84621 0 6.24371 1.3975 6.24371 3.12186C6.24371 4.84529 4.84529 6.27343 3.12186 6.27343ZM25.9944 26H20.6161V17.55C20.6161 15.5359 20.5753 12.9536 17.8137 12.9536C15.0113 12.9536 14.5814 15.1413 14.5814 17.4051V26H9.19657V8.64128H14.3659V11.0091H14.4411C15.1608 9.64507 16.9186 8.20579 19.5409 8.20579C24.9962 8.20579 25.9991 11.7984 25.9991 16.4645V26H25.9944Z"
        fill="white"
        className={className}
      />
    </svg>
  );
};

export default Linkedin;
