import { type NextRequest, NextResponse } from 'next/server'

export function onlyUnauth(request: NextRequest) {
	if (request.cookies.get('token')?.value) {
		return NextResponse.redirect(new URL('/', request.url))
	}
}