import { InputText, InputTextProps } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { useId } from 'react'

interface RInputProps extends InputTextProps {
	label?: string
}
export default function RInput ({ label, ...props }: RInputProps) {
	const fieldId = useId()
	return (
		<>
			<FloatLabel>
				{ label && <label
					htmlFor={fieldId}
					>
					{ label }
				</label> }
				<InputText
					{ ...props }
					id={fieldId}
				/>
			</FloatLabel>
		</>
	)
}