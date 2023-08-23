import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (): void => {
    console.log('You have got a loan')
  }

  // Polimorfism: override the method from the base class
  deposit: () => void = () => {
    console.log('You have deposited from CompanyAccount')
  }
}