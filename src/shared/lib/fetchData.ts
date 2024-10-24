import { cookies } from 'next/headers'
import { ResponseDto } from 'src/shared/types'

export const fetchData = async <DataT>(url: string | URL | Request, init?: RequestInit | undefined) => {
	return new Promise<DataT>((resolve, reject) => {
		fetch(url, {
			...init,
			headers: {
				authorization: `Bearer ${cookies().get('token')?.value}`,
				accept: 'application/json',
				'Content-Type': 'application/json',
				...init?.headers,
			}
		})
			.then((response) => {
				response.json().then((responseData: ResponseDto<DataT>): void => {
					if (response.ok) {
						resolve(responseData.data)
					}
					switch (response.status) {
						case 401: {
							cookies().delete('token')
							reject({
								message: responseData.message,
								auth: false
							})
							break
						}
						default: {
							reject({
								message: responseData.message
							})
						}
					}
				})
			})
	})
}