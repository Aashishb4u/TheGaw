import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-manufacturing',
  standalone: false,
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss'
})
export class ManufacturingComponent implements OnInit {
  cvForm: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.cvForm?.invalid) {
      this.cvForm.markAllAsTouched();
      return;
    }

    console.log(this.cvForm.value);
  }


  ngOnInit(): void {
    this.cvForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interestedIn: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern(/^\d{10}$/)],
      countryName: ['', Validators.required],
      message: [''],
      acceptTerms : [false, Validators.requiredTrue]
    });
  }

}
