import type { User } from '../types'

export const LANHost = 'http://192.168.0.16:8000'

export const localHost = 'http://localhost:8000'

// Will just switch to fetch

export const getFakeUsers = async (amt: number) => {
  try {
    const res = await fetch(`${LANHost}/api/v1/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const json = await res.json()

    return json
  } catch (error) {
    console.error(error)
    return [] as User[]
  }
}
