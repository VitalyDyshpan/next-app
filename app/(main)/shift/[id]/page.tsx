import React from 'react'
import ShiftDetail from 'src/widgets/Shift/shift-detail/ShiftDetail'

const Page = ({ params }: { params: { id: string } }) => {
	return (
		<div
			className="h-full"
		>
			<ShiftDetail
				shiftId={+params.id}
			/>
		</div>
	)
}

export default Page