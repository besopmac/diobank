// An abstract class doesn't should create instances, just use it as a base class
export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 1000
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): string => {
    if (this.validateStatus()) {
      this.balance += value

      return `Your balance is ${this.balance}` 
    }

    throw new Error('Your account is disabled');
  }

  withdraw = (value: number): string => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value
      
      return `Your balance is ${this.balance}`
    }

    throw new Error("You don't have enough balance");
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalance = (value: number) => {
    if (this.validateStatus()) {
      this.balance += value

      return `Your balance is ${this.balance}` 
    }
  }
  
  disableAccount = (): void => {
    this.status = false
  }

  enableAccount = (): void => {
    this.status = true
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Your account is disabled');
  }
}