import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { ApiService } from '../../services/api.service';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterViewInit {
  jobName: string = '';
  newsletterForm!: FormGroup;
  applyForm!: FormGroup;
  private readonly phoneRx = /^[0-9+\-() ]{8,20}$/;

  constructor(private fb: FormBuilder, private api: ApiService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mailType: ['news_letter']
    });

    this.applyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneRx)]],
      nationality: ['', Validators.required],
      countryName: ['', Validators.required],
      resume: [null, Validators.required],
      coverLetter: [null, Validators.required],
      mailType: ['career'],
      jobRole: [''],
    });
  }


  ngAfterViewInit(): void {
    // Initialize modal functionality
    this.modalService.initializeModals();

    // Set up any additional functionality

  }


  submitNewsletter(): void {
    if (this.newsletterForm.invalid) return;

    this.api.subscribeNewsletter(this.newsletterForm.value).subscribe({
      next: () => {
        alert('Thanks for joining our talent community!');
        this.newsletterForm.reset();
        this.closeModal();
      },
      error: err => alert(err)
    });
  }

  submitApplication(): void {
    if (this.applyForm.invalid) return;

    const fd = new FormData();
    Object.entries(this.applyForm.value).forEach(([k, v]) => fd.append(k, v as any));

    this.api.applyForJob(fd).subscribe({
      next: () => {
        alert('Application sent – best of luck!');
        this.applyForm.reset();
        this.closeModal();

      },
      error: err => alert(err)
    });
  }

  /* Handle <input type="file"> changes */
  onFileChange(e: Event, ctrl: 'resume' | 'coverLetter'): void {
    const file = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.applyForm.patchValue({ [ctrl]: file });
    this.applyForm.get(ctrl)?.markAsTouched();
  }


  // Method to open a modal with job name
  openModal(jobName): void {
    this.jobName = jobName;
    this.applyForm.patchValue({ jobRole: jobName });
    this.modalService.openModal('modal-container');

    const modal = document.querySelector('#modal-container');
    if (modal) {
      // Set job name in a data attribute
      modal.classList.remove('hidden');
    }
  }

  // Method to close a modal
  closeModal(): void {
    const modal = document.querySelector('#modal-container');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  // Setup job application form

}

