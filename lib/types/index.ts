// Standard cryptocurrency ticker type
export interface CryptoCurrency {
  ticker: string
  volume: number
  price: number
  change24hr: number
}

export interface CryptoCurrencyList extends Array<CryptoCurrency> {
  [id: number]: CryptoCurrency
}

// The user type
export interface User {
  uuid?: string
  isVerified: boolean
  username: string
  displayName?: string
  href: string
}

export interface UserList extends Array<User> {
  [id: number]: User
}
