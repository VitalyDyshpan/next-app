import React, { ReactNode } from 'react'
import ShiftEditing from 'src/widgets/Shift/shift-editing/ShiftEditing'

const Page = ({ params }: { params: { id: string } }): ReactNode => {
	return (
		<div
			className="h-full"
		>
			<ShiftEditing shiftId={+params.id} />
		</div>
	)
}

export default Page