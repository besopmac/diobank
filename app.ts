import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(123456789, 'John Doe', 123456789)
const companyAccount: CompanyAccount = new CompanyAccount('Doe John', 987654321)
const specialAccount: SpecialAccount = new SpecialAccount('Marina Campos', 123456789)

// Deposit
// peopleAccount.deposit(1500)
// companyAccount.deposit(20000)

// Withdraw
// peopleAccount.withdraw(500)
// companyAccount.withdraw(25000)

// Get Loan
// companyAccount.getLoan(5000)

// Special Deposit
// specialAccount.specialDeposit(500)
