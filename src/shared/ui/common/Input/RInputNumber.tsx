import React, { useId, useState } from 'react'
import { InputNumberProps } from 'primereact/inputnumber'
import { InputNumber } from 'primereact/inputnumber'
import { FloatLabel } from 'primereact/floatlabel'

interface RInputNumberProps extends InputNumberProps{
	label?: string
}
const RInputNumber = ({ label, ...props }: RInputNumberProps) => {
	const fieldId = useId()
	const [value, setValue] = useState<number | null | undefined>(props.value ?? null)
	return (
		<>
			<FloatLabel>
				<InputNumber
					{ ...props }
					inputId={fieldId}
					value={value}
					onValueChange={e => setValue(e.value)}
				/>
				{ label && <label
					htmlFor={fieldId}
				>
					{ label }
				</label> }
			</FloatLabel>
		</>
	)
}

export default RInputNumber