import React from "react";

const Facebook: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="26"
      viewBox="0 0 14 26"
      fill="#4267B2"
      {...props}
    >
      <path
        d="M13.0826 14.6242L13.8088 9.919H9.26934V6.86562C9.26934 5.57862 9.90326 4.32331 11.9365 4.32331H14V0.317688C14 0.317688 12.1277 0 10.337 0C6.5989 0 4.15556 2.25388 4.15556 6.33344V9.91981H0V14.625H4.15556V26H9.26934V14.625L13.0826 14.6242Z"
        fill="white"
        className={className}
      />
    </svg>
  );
};

export default Facebook;
