import { ShiftType, SingleShiftType, UnitType } from 'src/entities/Shift/types'
import { fetchData } from 'src/shared/lib/fetchData'

export const fetchShifts = async (role: 'master' | 'employee', status?: ('open' | 'close' | 'vote')[]): Promise<ShiftType[] | null> => {
	try {
		return await fetchData<ShiftType[]>(new URL(`/api/profile/shifts?role=${ role }&status=${ status }`, process.env.API_BASE_URL), {
			method: 'get'
		})
	} catch (e) {
		return null
	}
}

export const fetchSingleShift = async (shiftId: number) => {
	try {
		return await fetchData<SingleShiftType>(new URL(`/api/profile/shifts/${shiftId}`, process.env.API_BASE_URL), {
			method: 'get'
		})
	}
	catch (e) {
		return null
	}
}

export const fetchShiftUnits = async (factoryId: number): Promise<UnitType[] | null> => {
	try {
		return await fetchData<UnitType[]>(new URL(`/api/helpers/unit/list?factory=${factoryId}`, process.env.API_BASE_URL), {
			method: 'get'
		})
	} catch (e) {
		return null
	}
}