import { SVGProps } from 'react'

export const IconUser = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				{ ...props }
			>
				<g
					clipPath="url(#clip0_4188_11622)"
				>
					<circle
						cx="10"
						cy="10"
						r="10"
						fill="#DADFEA"
					/>
					<path
						d="M10.0008 4.61585C9.05281 4.61585 8.19568 4.97111 7.58661 5.61672C6.97753 6.26233 6.67323 7.15504 6.74198 8.11312C6.88139 9.99996 8.34326 11.5383 10.0008 11.5383C11.6583 11.5383 13.1173 9.99996 13.2596 8.1136C13.3308 7.16465 13.0289 6.28012 12.4097 5.62249C11.7982 4.97351 10.9425 4.61585 10.0008 4.61585Z"
						fill="white"
					/>
					<path
						d="M10 13C6.68629 13 4 14.7094 4 16.8181C4.58334 18.3333 6.66669 19.5833 10 19.5833C13.3333 19.5833 15.4167 18.3333 16 16.8181C16 14.7094 13.3137 13 10 13Z"
						fill="white"
					/>
					<circle
						cx="10"
						cy="10"
						r="9.5"
						stroke="#DADFEA"
					/>
				</g>
				<defs>
					<clipPath id="clip0_4188_11622">
						<rect
							width="20"
							height="20"
							fill="white"
						/>
					</clipPath>
				</defs>
			</svg>
		</>
	)
}