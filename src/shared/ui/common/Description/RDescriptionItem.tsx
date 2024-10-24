import React from 'react'

interface RDescriptionItemProps {
	label: string | number
	description: string | number | React.ReactNode
}
const RDescriptionItem = ({ label, description }: RDescriptionItemProps) => {
	return (
		<div className="flex flex-col gap-[8px]">
			<span className="text-[#949DAF] text-base font-semibold tracking-[0.2px]">{ label }</span>
			{
				typeof description === 'string' || typeof description === 'number'
					? <span className="text-lg tracking-[0.2px]">{ description }</span>
					: description
			}
		</div>
	)
}

export default RDescriptionItem