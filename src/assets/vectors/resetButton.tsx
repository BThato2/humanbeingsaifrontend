const ResetButton = (props: any) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 11L6 15L10 19" stroke={props.stroke} strokeWidth="1.5" />
    <path
      d="M1.93782 11.5C1.16735 10.1655 0.858753 8.61407 1.05989 7.08632C1.26102 5.55856 1.96064 4.13986 3.05025 3.05025C4.13986 1.96064 5.55856 1.26102 7.08632 1.05989C8.61407 0.858753 10.1655 1.16735 11.5 1.93782C12.8345 2.70829 13.8775 3.89757 14.4672 5.32122C15.0568 6.74486 15.1603 8.3233 14.7615 9.81173C14.3627 11.3002 13.4838 12.6154 12.2613 13.5535C11.0388 14.4915 9.54094 15 8 15"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export default ResetButton
