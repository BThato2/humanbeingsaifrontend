const SearchButtonMicroscope = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="6" stroke={props.stroke} />
    <path
      d="M7 4C6.60603 4 6.21593 4.0776 5.85195 4.22836C5.48797 4.37913 5.15726 4.6001 4.87868 4.87868C4.6001 5.15726 4.37913 5.48797 4.22836 5.85195C4.0776 6.21593 4 6.60603 4 7"
      stroke={props.stroke}
      strokeLinecap="round"
    />
    <path d="M16 16L13 13" stroke={props.stroke} strokeLinecap="round" />
  </svg>
)

export default SearchButtonMicroscope
