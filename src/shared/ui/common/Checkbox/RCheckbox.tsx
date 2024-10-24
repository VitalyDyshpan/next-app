import { Checkbox, CheckboxPassThroughOptions, CheckboxProps } from 'primereact/checkbox'
import { useState } from 'react'

export const RCheckbox = ({ children, label, ...props }: Omit<CheckboxProps, 'checked'> & { label: string }) => {
	const [checked, setChecked] = useState<boolean>(false)
	const pt: CheckboxPassThroughOptions = {
		root: {
			className: 'relative inline-flex select-none align-bottom w-5 h-5'
		},
		input: {
			className: 'border-2 border-solid border-[#d1d5db] rounded-sm cursor-pointer appearance-none absolute top-0 left-0 w-full h-full opacity-0 z-[1]'
		},
		box: (options) => {
			return {
				className: 'border-2 w-5 h-5 rounded-sm transition-colors flex justify-center items-center text-white' + (options?.context.checked ? ' border-primary bg-primary' : ' border-[#d1d5db] bg-transparent')
			}
		},
		icon: {
			className: 'w-3 h-3'
		}
	}
	return (
		<>
			<label
				className="text flex gap-2 items-center cursor-pointer tracking-[0.2px]"
			>
				<Checkbox
					{...props}
					checked={checked}
					pt={pt}
					onChange={e => setChecked(!!e.checked)}
				/>
				{children ?? label}
			</label>
		</>
	)
}