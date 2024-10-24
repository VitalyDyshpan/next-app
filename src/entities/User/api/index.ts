'use server'
import { UserType } from 'src/entities/User'
import { fetchData } from 'src/shared/lib/fetchData'

export const fetchUser = async () => {
	try {
		return await fetchData<UserType>(new URL('/api/profile/info', process.env.API_BASE_URL), {
			method: 'get'
		})
	} catch (e) {
		console.log(e)
		return null
	}
}