export type ShiftModelType = {
	type: 'day' | 'night' | ''
	department_id: number | undefined
	shift_date: string
	planned_output: number | null
	employers: (number | null)[]
	unit_id: number | undefined
}