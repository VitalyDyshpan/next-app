export type ShiftStatusType = 'open' | 'close' | 'vote' | ''
import type { UserType } from 'src/entities/User/@x/shift'

export type ShiftType = {
	id: number | null
	date: string
	title: string
	type: 'day' | 'night' | ''
	department: string
	status: ShiftStatusType
	voted: boolean | null
}

export type OutputUnitType = {
	id: number
	name: string
}

export type OutputType = {
	id: number
	planned_output: number | null
	actual_output: number | null
	actual_output_hours: number | null
	type: 'productive' | 'non-productive' | 'breaking' | ''
	unit: OutputUnitType | null
	user_id: number | null
}

export type ShiftOutputsType = {
	productive: OutputType[],
	non_productive: OutputType[]
}

export type SingleShiftType = ShiftType & {
	outputs: ShiftOutputsType
	employers: UserType[]
}

export type UnitType = {
	id: number
	name: string
}