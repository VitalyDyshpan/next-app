import React, { AwaitedReactNode } from 'react'
import { fetchShiftUnits, fetchSingleShift, SingleShiftType, UnitType } from 'src/entities/Shift'
import FillShift from 'src/features/@abstract/fill-shift-form/ui/FillShift'
import { fetchUser } from 'src/entities/User'
import { editShift } from '@/app/actions/editShift'

interface ShiftEditingProps {
	shiftId: number
}
const ShiftEditing = async ({ shiftId }: ShiftEditingProps): Promise<AwaitedReactNode> => {
	const shiftData: SingleShiftType | null = await fetchSingleShift(shiftId)
	const units: UnitType[] | null = await fetchShiftUnits(1)
	const user = await fetchUser()
	return (
		<div>
			<FillShift
				action={ editShift }
				shiftUnits={units}
				user={ user }
			/>
		</div>
	)
}

export default ShiftEditing