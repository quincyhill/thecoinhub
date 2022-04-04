// Standard cryptocurrency ticker type
export interface CryptoCurrency {
  ticker: string
  volume: number
  price: number
  change24hr: number
}

// The user type
export interface User {
  uuid?: string
  isVerified: boolean
  username: string
  displayName?: string
  href: string
}
