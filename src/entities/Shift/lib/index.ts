import { UserType } from 'src/entities/User/@x/shift'
export const getEmployeeFullName = (user: UserType): string => {
	return `${user.last_name || ''} ${user.first_name || ''} ${user.last_name || ''}`.trim()
}