export class LoanRequest {
  constructor(
    public loanValue: number,
    public yearlyInterestRate: number,
    public loanTerm: number
  ) {}
}
