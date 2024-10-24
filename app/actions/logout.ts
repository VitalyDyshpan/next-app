'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const logout = async (): Promise<Response> => {
	cookies().delete('token')
	return redirect('/auth')
}