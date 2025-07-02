import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-manufacturing',
  standalone: false,
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss'
})
export class ManufacturingComponent implements OnInit {
  cvForm: FormGroup | any;


  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService) { }
  isSubmitting = false;               // <-- NEW

  onSubmit(): void {
    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { acceptTerms, ...payload } = this.cvForm.value as any;

    this.apiService.onSubmitManufacturing(payload).subscribe({
      next: () => {
        alert('Your message has been sent successfully!');
        this.cvForm.reset({ mailType: 'demo_form', acceptTerms: false });
      },
      error: err => {
        alert(err?.error?.message || 'An error occurred. Please try again later.');
      },
      complete: () => (this.isSubmitting = false)
    });

  }


  ngOnInit(): void {
    this.cvForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interestedIn: ['', Validators.required],
      companyName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      countryName: ['', Validators.required],
      message: [''],
      acceptTerms: [false, Validators.requiredTrue],
      mailType: ['demo_form']
    });
  }

}
