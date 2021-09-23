import './style.css'
function MailSVG(props) {
    return (
      <svg
        data-name="Livello 1"
        id="prefix__Livello_1"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <style>
            {
              ".prefix__cls-2{fill:none;stroke:#fff;stroke-width:2px;stroke-linejoin:round}"
            }
          </style>
        </defs>
        <title />
        <path d="M1 33A32 32 0 1033 1 32 32 0 001 33z" />
        <g id="prefix__Mail">
          <rect
            height={24.18}
            rx={1.48}
            ry={1.48}
            width={32}
            x={17}
            y={21}
            strokeMiterlimit={10}
            fill="none"
            stroke="#fff"
            strokeWidth={2}
          />
          <path
            className="prefix__cls-2"
            d="M48.44 21.83L37.53 33.54a6.27 6.27 0 01-9.07 0l-10.9-11.7M39.19 31.75l8.96 12.76M26.98 31.88L17.7 44.51"
          />
        </g>
      </svg>
    )
  }
  
  export default MailSVG