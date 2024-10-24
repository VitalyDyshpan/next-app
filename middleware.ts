import { onlyUnauth } from './middlewares/onlyUnauth'
import { onlyAuth } from './middlewares/onlyAuth'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/auth')) {
		return onlyUnauth(request)
	}
	if (request.nextUrl.pathname === '/') {
		return onlyAuth(request)
	}
}