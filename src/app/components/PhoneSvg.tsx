import * as React from "react"
import { JSX } from "react/jsx-runtime"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#171738"
                d="M32.207 4.805A7.788 7.788 0 0 0 22.949.273L5.762 4.961C2.363 5.898 0 8.984 0 12.5 0 60.82 39.18 100 87.5 100c3.516 0 6.602-2.363 7.54-5.762l4.687-17.187a7.788 7.788 0 0 0-4.532-9.258l-18.75-7.813c-3.183-1.328-6.875-.41-9.043 2.266l-7.89 9.629a66.01 66.01 0 0 1-31.387-31.387l9.629-7.87a7.795 7.795 0 0 0 2.266-9.044l-7.813-18.75v-.02Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h100v100H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
