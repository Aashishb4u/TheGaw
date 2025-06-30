import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  cvForm: FormGroup | any;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
  isSubmitting = false;               // <-- NEW

  onSubmit(): void {
    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.apiService.onSubmitNewsletter(this.cvForm.value).subscribe({
      next: () => {
        alert('Your message has been sent successfully!');
        this.cvForm.reset({ mailType: 'newsletter' });
      },
      error: err => {
        alert(err?.error?.message || 'An error occurred. Please try again later.');
      },
      complete: () => this.isSubmitting = false
    });
  }


  ngOnInit(): void {
    this.cvForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],//
      mailType: ['news_letter']
    });
  }

}
