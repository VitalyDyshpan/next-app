import { Password, PasswordProps } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel'
import { useId } from 'react'

interface RPasswordInputProps extends PasswordProps {
	label?: string
}
export const RPasswordInput = ({ label, ...props }: RPasswordInputProps) => {
	const fieldId = useId()
	return (
		<>
			<FloatLabel>
				<Password
					id={fieldId}
					toggleMask={true}
					{ ...props }
					inputClassName="w-full"
					pt={{
						iconField: {
							root: 'w-full'
						},
					}}
				/>
				{
					label && <label
					htmlFor={fieldId}
					>
						{label}
					</label>
				}
			</FloatLabel>
		</>
	)
}