// An abstract class doesn't should create instances, just use it as a base class
export abstract class DioAccount {
  private name: string
  readonly accountNumber: number
  balance: number = 1000
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log(`The name has been changed to ${name}`)
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log('You have deposited')
    }
  }

  withdraw = (): void => {
    console.log('You have withdrawn')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Your account is disabled');
  }
}