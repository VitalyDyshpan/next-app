import React, { ReactElement, ReactNode } from 'react'

const RMenuItem = ({ icon, slot }: { icon: ReactNode, slot: ReactNode }): ReactElement => {
	return (
		<div
			className="flex gap-[8px] items-center py-[24px] w-full border-b border-solid border-[#DADFEA]"
		>
			{ icon }
			<p className="text-lg tracking-[0.2px] text-[#2A3039]">
				{ slot }
			</p>
		</div>
	)
}

export default RMenuItem