import { cookies } from 'next/headers'

export async function POST (request: Request): Promise<Response> {
	const res = await request.json()
	const response = await fetch('http://localhost:8106/api/auth/login', {
		method: 'post',
		body: JSON.stringify(res),
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
	if (response.ok) {
		const responseData: { data: { token: string }, message: string } = await response.json()
		cookies().set('token', responseData.data.token, {
			httpOnly: true
		})
		return Response.json({
			message: 'Вы успешна авторизовались'
		})
	} else {
		return response
	}
}