import React from 'react'
import { ShiftType } from 'src/entities/Shift'
import Link from 'next/link'
import { ShiftPreview } from 'src/entities/Shift/ui/ShiftPreview'

interface ShiftsListProps {
	shiftList: ShiftType[]
	emptyListText?: string
	shiftPath?: string
}
const ShiftsList = ({ shiftList, emptyListText, shiftPath }: ShiftsListProps) => {
	return (
		<div
			className="flex flex-col gap-2"
		>
			{
				shiftList.length
					? shiftList.map(shift => <Link key={ shift.id } href={ shiftPath ? `${shiftPath}/${shift.id}` : `/shift/${shift.id}` }>
						<ShiftPreview
							shift={ shift }
							className="dsfsa"
						/>
					</Link>)
					: <p className="text-lg tracking-[0.2px]">
						{ emptyListText || 'Ничего нет' }
					</p>
			}
		</div>
	)
}

export default ShiftsList