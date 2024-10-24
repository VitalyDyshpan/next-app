'use client'
import React from 'react'
import { RInputNumber } from 'src/shared/ui/common/Input'
import { useFormState } from 'react-dom'
import { UserType } from 'src/entities/User'
import { UnitType } from 'src/entities/Shift'
import { RSelect } from 'src/shared/ui/common/Select'
import { ShiftModelType } from '../types'
import { RSubmitButton } from 'src/shared/ui/common/Button/RSubmitButton'

interface FillShiftProps {
	action: (state: InitialState, payload: FormData) => InitialState | Promise<InitialState>
	user: UserType | null
	shiftUnits: UnitType[] | null
	shiftData?: Partial<ShiftModelType>
	employersList?: { id: number, fio: string }[]
}
type InitialState = {
	message: string
}
const FillShift = ({ action, user, shiftUnits, shiftData }: FillShiftProps) => {
	const initialState: InitialState = {
		message: '',
	}
	const [state, formAction] = useFormState<InitialState, FormData>(action, initialState)

	const shiftTypes: {
		id: number
		value: string
		label: string
	}[] = [
		{
			id: 1,
			value: 'day',
			label: 'Дневная'
		},
		{
			id: 2,
			value: 'night',
			label: 'Ночная'
		}
	]
	return (
		<>
			{ user && <form
				action={ formAction }
				autoComplete={'off'}
				className="flex flex-col gap-6"
			>
				<RSelect
					options={ user.departments }
					optionLabel="name"
					optionValue="id"
					label="Выберите цех"
					name="department_id"
					className="w-full"
				/>
				<RSelect
					options={ shiftTypes }
					optionLabel="label"
					optionValue="value"
					label="Выберите смену"
					name="type"
					className="w-full"
				/>
				<RInputNumber
					label="Плановая выработка"
					name="planned_output"
					className="w-full"
				/>
				{ shiftUnits && <RSelect
					options={ shiftUnits }
					label="Выберите единицу измерения"
					optionLabel="name"
					optionValue="id"
					className="w-full"
					name="unit_id"
				/> }
				<RSubmitButton
					label="Отправить"
				/>
			</form> }
		</>
	)
}

export default FillShift