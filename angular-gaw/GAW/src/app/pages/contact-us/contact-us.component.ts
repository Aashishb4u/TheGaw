import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  cvForm: FormGroup | any;

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService) { }
  isSubmitting = false;               // <-- NEW

  onSubmit(): void {
    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

      this.apiService.onSubmitContact(this.cvForm.value).subscribe({
        next: () => {
          alert('Your message has been sent successfully!');
          this.cvForm.reset({ subject: 'General Inquiry', mailType: 'contact' });
        },
        error: err => {
          alert(err?.error?.message || 'An error occurred. Please try again later.');
        },
        complete: () => this.isSubmitting = false
      });
  }


  ngOnInit(): void {
    this.cvForm = this.fb.group({
      firstName: ['', Validators.required],//
      lastName: ['', Validators.required],//
      subject: ['General Inquiry', Validators.required],
      email: ['', [Validators.required, Validators.email]],//
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], 
      companyName: ['', Validators.required],//
      message: [''],
      mailType: ['contact']
    });
  }

}
