import axios, { AxiosResponse } from 'axios'
import type { User } from '../types'

export const LANHost = 'http://192.168.0.16:8000'

export const localHost = 'http://localhost:8000'

export const getFakeUsers = async (amt: number) => {
  try {
    const res: AxiosResponse<User[]> = await axios.get(`${LANHost}/api/users`, {
      params: { amt: amt },
    })
    return res.data
  } catch (error) {
    console.error(error)
    return [] as User[]
  }
}
