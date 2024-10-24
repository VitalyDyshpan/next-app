'use server'
export const editShift = async (prevState: { message: string }, editShiftFormData: FormData): Promise<{ message: string }> => {
	console.log(editShiftFormData)
	return {
		message: 'success'
	}
}