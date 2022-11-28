import { webcrypto, KeyObject } from 'node:crypto'

export abstract class User {
  name: string
  username: string
  password: string
  highRole: boolean
  isActive: boolean
  constructor (name, username, password, highRole, isActive) {
    this.name = name
    this.username = username
    this.password = password
    this.highRole = highRole
    this.isActive = isActive
  }

  getName () {
    return this.name
  }

  setName (name) {
    this.name = name
  }

  getUsername () {
    return this.username
  }

  setUsername (username) {
    this.username = username
  }

  verifyPassword (password) {
    return password === this.password
  }

  setPassword (password) {

  }
}
