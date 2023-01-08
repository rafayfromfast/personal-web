interface Props {
  svgProps?: React.SVGProps<SVGSVGElement>;
  color?: string;
  size?: number;
}

// TODO: Adds comments indication which path represents what letter
// and add way to infividually change each letter's color

const TestLogo: React.FC<Props> = ({
  color = "none",
  size = "28px",
  svgProps,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 31"
      fill={color}
    >
      <path
        d="M14.7988 17.1211V28.1788"
        stroke="#F4F7FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7986 17.1211C16.3254 17.1211 17.563 15.8835 17.563 14.3567C17.563 12.83 16.3254 11.5923 14.7986 11.5923C13.2719 11.5923 12.0342 12.83 12.0342 14.3567C12.0342 15.8835 13.2719 17.1211 14.7986 17.1211Z"
        stroke="#F4F7FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.474 12.9512C22.3212 10.5728 21.128 7.45535 21.1325 4.2207H8.46459C8.46907 7.45537 7.27587 10.5729 5.12305 12.9512L14.7985 28.179L24.474 12.9512Z"
        stroke="#F4F7FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TestLogo;
