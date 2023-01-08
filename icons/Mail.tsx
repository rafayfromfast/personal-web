import React from "react";

export default function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      viewBox="0 0 18 15"
      {...props}
      fill="none"
    >
      <path
        d="M16.2 3.75L9 8.4375L1.8 3.75V1.875L9 6.5625L16.2 1.875M16.2 0H1.8C0.801 0 0 0.834375 0 1.875V13.125C0 13.6223 0.189642 14.0992 0.527208 14.4508C0.864773 14.8025 1.32261 15 1.8 15H16.2C16.6774 15 17.1352 14.8025 17.4728 14.4508C17.8104 14.0992 18 13.6223 18 13.125V1.875C18 1.37772 17.8104 0.900805 17.4728 0.549175C17.1352 0.197544 16.6774 0 16.2 0Z"
        fill={props.fill || "#469EEF"}
      />
    </svg>
  );
}
