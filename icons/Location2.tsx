import React from "react";

export default function Location2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="19"
      viewBox="0 0 16 19"
      {...props}
      fill="none"
    >
      <path
        d="M8 0C5.87904 0.00233461 3.84566 0.789498 2.34592 2.18882C0.846168 3.58814 0.00251067 5.48535 8.51118e-06 7.46429C-0.00253177 9.08147 0.56363 10.6548 1.61164 11.9429C1.61164 11.9429 1.82982 12.2109 1.86546 12.2496L8 19L14.1374 12.2462C14.1694 12.2102 14.3884 11.9429 14.3884 11.9429L14.3891 11.9408C15.4366 10.6533 16.0025 9.08073 16 7.46429C15.9975 5.48535 15.1538 3.58814 13.6541 2.18882C12.1543 0.789498 10.121 0.00233461 8 0V0ZM8 10.1786C7.42464 10.1786 6.86219 10.0194 6.3838 9.72113C5.9054 9.42288 5.53254 8.99897 5.31235 8.503C5.09217 8.00703 5.03456 7.46127 5.14681 6.93475C5.25906 6.40823 5.53612 5.9246 5.94296 5.545C6.34981 5.1654 6.86816 4.90689 7.43247 4.80215C7.99677 4.69742 8.58169 4.75117 9.11326 4.95661C9.64483 5.16205 10.0992 5.50995 10.4188 5.95631C10.7385 6.40267 10.9091 6.92745 10.9091 7.46429C10.9081 8.18388 10.6013 8.87375 10.056 9.38258C9.51062 9.89142 8.77124 10.1777 8 10.1786V10.1786Z"
        fill={props.fill || "#5FC4BA"}
      />
    </svg>
  );
}
