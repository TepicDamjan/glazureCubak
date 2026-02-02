import * as React from "react"
import { JSX } from "react/jsx-runtime"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        {...props}
    >
        <path
            fill="#171738"
            d="M100 50.186C100 22.466 77.617 0 50 0S0 22.466 0 50.186c0 23.525 16.152 43.286 37.93 48.716V65.517H27.617v-15.33H37.93V43.58c0-17.075 7.695-24.995 24.414-24.995 3.164 0 8.633.627 10.879 1.254v13.88c-1.172-.118-3.223-.196-5.782-.196-8.203 0-11.367 3.117-11.367 11.213v5.45h16.328l-2.812 15.33H56.055V100C80.82 97 100 75.848 100 50.186Z"
        />
    </svg>
)
export default SvgComponent
