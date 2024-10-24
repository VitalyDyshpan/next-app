import React from 'react'
import { fetchSingleShift, SingleShiftType } from 'src/entities/Shift'
import { ShiftTemplate } from 'src/entities/Shift/ui/ShiftTemplate'
import Link from 'next/link'

interface ShiftDetailProps {
	shiftId: number
}
const ShiftDetail = async ({ shiftId }: ShiftDetailProps) => {
	const shiftData: SingleShiftType | null = await fetchSingleShift(shiftId)
	return (
		<>
			{
				shiftData && <ShiftTemplate
					shift={shiftData}
					mainAction={ shiftData.status === 'open' && <Link className="flex items-center" href={`/shift/${shiftId}/edit`}>
						<i className="pi pi-pencil" />
				</Link> }
					outputAction={ shiftData.status === 'open' && <Link className="flex items-center" href={ `/shift/${ shiftId }/edit/output` }>
						<i className="pi pi-pencil" />
					</Link> }
				/>
			}
		</>
	)
}

export default ShiftDetail