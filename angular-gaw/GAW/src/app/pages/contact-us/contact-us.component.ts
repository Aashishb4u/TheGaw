import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

interface ContactData {
  title: string;
  email: string;
  defaultIcon: string;
  hoverIcon: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  cvForm: FormGroup | any;
  isSubmitting = false;
  
  // Define the contact data as a property of the component
  contactData: ContactData[] = [
    {
      title: "TheGAW HQ – MENATI",
      email: "admin@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW Quality Assurance",
      email: "qms@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW – Controlled Bolting and Hydraulic Equipment",
      email: "cbhe@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW Finance",
      email: "accounts@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW – Hydrotesting and Injection Skids",
      email: "htis@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW Human Resources",
      email: "hr@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW – Fluid Transfer Solutions",
      email: "fts@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW Vendor Management",
      email: "procurement@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW – On Site ATEX Machining",
      email: "osm@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
    {
      title: "TheGAW – Sales and Commercial Excellence",
      email: "sales@thegawindustries.com",
      defaultIcon: "/assets/images/icons/mail.svg",
      hoverIcon: "/assets/images/icons/mail-icon.svg",
    },
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: ApiService) { }

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      subject: ['General Inquiry', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      companyName: ['', Validators.required],
      message: [''],
      mailType: ['contact']
    });
  }
}
