'use client'
import { Button, ButtonPassThroughOptions, ButtonProps } from 'primereact/button'
export const RButton = ({ children, ...props }: ButtonProps) => {
	const pt: ButtonPassThroughOptions = {
		 root: (options) => {
			return 'rounded max-w-[320px] w-full text text-white px-[24px] py-[17px] transition-all' + (options?.context.disabled ? ' bg-[#DADFEA] cursor-not-allowed' : ' bg-primary hover:bg-primary-600')
		},
		label: (options) => {
			return {
				className: [
					'text font-bold' + (options?.context.disabled ? ' text-[#949DAF]' : ' text-white')
				]
			}
		},
		loadingIcon: () => {
			return 'mr-[6px]'
		}
	}
	return (
		<>
			<Button
				pt={pt}
				{ ...props }
			>
				{ children }
			</Button>
		</>
	)
}