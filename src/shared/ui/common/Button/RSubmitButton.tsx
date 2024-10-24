'use client'
import { ButtonProps } from 'primereact/button'
//import { RButton } from './index'
import { useFormStatus } from 'react-dom'
import { RButton } from 'src/shared/ui/common/Button/RButton'

export const RSubmitButton = ({ children, ...props }: ButtonProps) => {
	const { pending } = useFormStatus()
	return (
		<>
			<RButton
				{...props}
				loading={pending}
				type="submit"
			>
				{ children }
			</RButton>
		</>
	)
}