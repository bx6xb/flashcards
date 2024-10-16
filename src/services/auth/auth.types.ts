export interface Me {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: string
  created: string
  updated: string
}
export interface LoginQueryPayload {
  password: string
  email: string
  rememberMe: boolean
}
