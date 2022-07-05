import { LoginResponse } from '../auth/LoginApi'

export class User {
  id: number
  email: string
  authToken: string
  refreshToken: string
  cf: boolean
  mc: boolean

  constructor(
    id: number,
    email: string,
    authToken: string,
    refreshToken: string,
    cf: boolean,
    mc: boolean
  ) {
    this.id = id
    this.email = email
    this.authToken = authToken
    this.refreshToken = refreshToken
    this.cf = cf
    this.mc = mc
  }

  static fromJson(loginResponse: LoginResponse, email: string): User {
    return new User(
      loginResponse.userId,
      email,
      loginResponse.authToken,
      loginResponse.refreshToken,
      loginResponse.cf,
      loginResponse.mc
    )
  }
}
