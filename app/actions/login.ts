'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetchData } from 'src/shared/lib/fetchData'

export const login = async (prevState: { message: string }, loginFormData: FormData): Promise<{ message: string }> => {
	const preparedLoginData: { login: string, password: string } = {
		login: String(loginFormData.get('login')) ?? '',
		password: String(loginFormData.get('password')) ?? ''
	}
	try {
		const data = await fetchData<{ token: string } | null>(new URL('/api/auth/login', process.env.API_BASE_URL), {
			method: 'post',
			body: JSON.stringify(preparedLoginData),
		})
		if (data) {
			cookies().set('token', data.token, {
				httpOnly: true,
				maxAge: loginFormData.get('remember') ? 14 * 24 * 60 * 60 : undefined
			})
		}
	}
	catch (error) {
		return  error as { message: string }
	}
	redirect('/')
}