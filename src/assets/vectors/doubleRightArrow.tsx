const DoubleRightArrow = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.12891L17.5858 8.71469C18.3668 9.49574 18.3668 10.7621 17.5858 11.5431L10 19.1289"
      stroke={props.fill}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M1 1L8.58579 8.58579C9.36684 9.36684 9.36683 10.6332 8.58579 11.4142L1 19"
      stroke={props.fill}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

export default DoubleRightArrow
