export type UserRoleType = {
	id: number
	name: string
	slug: 'master' | 'employee'
}

export type UserDepartmentType = {
	id: number
	name: string
	factory_id: number
}

export type UserType = {
	id: number | null
	email: string
	phone: string
	first_name: string
	middle_name: string
	last_name: string
	job: string
	email_notification: boolean
	role: UserRoleType[]
	departments: UserDepartmentType[]
}

export type UserRateType = {
	rate: number
	assume_bonus: number
	real_bonus: number
	missed_bonus: number
}

export type UserShiftRateType = {
	id: number | null
	title: string
	type: string
	status: string
	department: string
	rate: number
	assume_bonus: number | null
	real_bonus: number | null
	date: string
}