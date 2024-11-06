import { LoanService } from './../../services/loan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanRequest } from 'src/app/models/loan-request.model';

@Component({
  selector: 'app-emi-form',
  templateUrl: './emi-form.component.html',
  styleUrls: ['./emi-form.component.css'],
})
export class EmiFormComponent implements OnInit {
  public emiForm!: FormGroup;
  emiAmount: number | null = 0;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loanService: LoanService) {}

  ngOnInit(): void {
    this.emiForm = this.fb.group({
      loanValue: ['', [Validators.required, Validators.min(1)]],
      yearlyInterestRate: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      loanTerm: [
        '',
        [Validators.required, Validators.min(0), Validators.max(30)],
      ],
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.emiAmount = 0;

    if (this.emiForm.valid) {
      const loanRequest = new LoanRequest(
        this.emiForm.value.loanValue,
        this.emiForm.value.yearlyInterestRate,
        this.emiForm.value.loanTerm
      );

      this.loanService.calculateEmi(loanRequest).subscribe({
        next: (result) => {
          this.emiAmount = result;
        },
        error: (error) => {
          this.errorMessage =
            'There was an error calculating the EMI. Please try again.';
        },
      });
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }
}
