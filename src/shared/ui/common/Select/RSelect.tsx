import React, { useId, useState } from 'react'
import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { FloatLabel } from 'primereact/floatlabel'

interface RSelectProps extends DropdownProps{
	label?: string
}
const RSelect = ({ label, ...props }: RSelectProps) => {
	const fieldId = useId()
	const [value, setValue] = useState<any>(props.value)
	return (
		<>
			<FloatLabel>
				<Dropdown
					{...props}
					inputId={fieldId}
					value={value}
					onChange={e => setValue(e.value)}
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

export default RSelect