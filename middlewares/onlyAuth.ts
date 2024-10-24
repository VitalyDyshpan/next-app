import { type NextRequest, NextResponse } from 'next/server'

export function onlyAuth(request: NextRequest) {
	if (!request.cookies.get('token')?.value) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}
}