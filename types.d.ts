import type { Role } from './constants'

declare global {
  interface Message {
    id?: number
    role: Role
    content: string
  }
}
