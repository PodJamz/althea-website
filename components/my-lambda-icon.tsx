// my-lambda-icon.tsx
import { SVGProps } from 'react'

export function MyLambdaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="34"
      viewBox="0 0 26 34"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)"
        fill="currentColor" stroke="none">
        <path d="M138 238 c6 -7 22 -44 38 -83 15 -38 34 -76 42 -82 9 -7 12 -16 8 -20 -13 -14 -41
        14 -56 55 -8 23 -18 42 -21 42 -4 0 -15 -22 -24 -50 -9 -28 -23 -50 -31 -50
        -11 0 -9 11 8 52 29 73 34 116 14 124 -9 3 -16 10 -16 15 0 13 26 11 38 -3z"/>
      </g>
    </svg>
  )
}