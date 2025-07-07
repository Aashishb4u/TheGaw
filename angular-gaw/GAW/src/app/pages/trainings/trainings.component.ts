import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-trainings',
  standalone: false,
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainingRequestForm!: FormGroup;
  smeForm!: FormGroup;
  partnershipForm!: FormGroup;
  modal: any;

  readonly areaOfInterestOptions: string[] = [
    'Collaborative training programs',
    'Knowledge sharing initiatives',
    'Regular trainings for working professionals',
    'Regular trainings for students',
    'Technology Integration',
    'Other (Specify)'
  ];

  private readonly phonePattern = /^[0-9+\-() ]{8,20}$/;

  constructor(private modalService: ModalService, private fb: FormBuilder,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.buildTrainingRequestForm();
    this.buildSmeForm();
    this.buildPartnershipForm();

  }
  private buildTrainingRequestForm(): void {
    this.trainingRequestForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      jobRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      regionName: ['', Validators.required],
      countryName: ['', Validators.required],
      interestedIn: ['', Validators.required],
      participants: [null, [Validators.required, Validators.min(1)]],
      trainingFormat: ['', Validators.required],
      comments: [''],
      mailType: ['request_for_training']
    });
  }

  private buildSmeForm(): void {
    this.smeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      linkedIn: [''],
      experience: [null, [Validators.required, Validators.min(0)]],
      regionName: ['', Validators.required],
      countryName: ['', Validators.required],
      expertise: ['', Validators.required],
      availability: ['', Validators.required],
      resume: [null, Validators.required],
      comments: [''],
      mailType: ['sme_form']
    });
  }

  private buildPartnershipForm(): void {
    this.partnershipForm = this.fb.group({
      companyName: ['', Validators.required],
      fullName: ['', Validators.required],
      jobRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      regionName: ['', Validators.required],
      countryName: ['', Validators.required],
      interestedIn: this.fb.array([], Validators.required),   // << FormArray!
      message: ['', Validators.required],
      support_doc: [null, Validators.required],
      comments: [''],
      mailType: ['transfer_partner_form']
    });
  }

  /* ================================================================== */
  /*  TEMPLATE HELPERS                                                  */
  /* ================================================================== */

  /** Add / remove an interest checkbox value inside the FormArray */
  toggleInterest(option: string, checked: boolean): void {
    const fa = this.partnershipForm.get('interestedIn') as FormArray;
    if (checked) {
      fa.push(this.fb.control(option));
    } else {
      const idx = fa.value.indexOf(option);
      if (idx >= 0) fa.removeAt(idx);
    }
  }

  onInterestChange(event: Event, option: string): void {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    const fa = this.partnershipForm.get('interestedIn') as FormArray;

    if (checked) {
      fa.push(this.fb.control(option));
    } else {
      const index = fa.value.indexOf(option);
      if (index !== -1) {
        fa.removeAt(index);
      }
    }
  }

  /** Generic file‑input handler for SME + Partnership forms */
  onFileChange(evt: Event, control: string, form: FormGroup): void {
    const file = (evt.target as HTMLInputElement).files?.[0] ?? null;
    form.get(control)?.setValue(file);
    form.get(control)?.markAsDirty();
    form.get(control)?.markAsTouched();
  }

  /* ================================================================== */
  /*  SUBMITTERS                                                        */
  /* ================================================================== */

  submitTrainingRequest(): void {
    if (this.trainingRequestForm.invalid) return;

    this.api.requestTraining(this.trainingRequestForm.value).subscribe({
      next: () => {
        alert('Training request submitted!');
        this.trainingRequestForm.reset();
        this.modalService.closeModal('training-request-modal');
      },
      error: err => {
        console.error(err);
        alert('Submission failed');
      }
    });
  }

  submitSme(): void {
    if (this.smeForm.invalid) return;

    const fd = new FormData();
    Object.entries(this.smeForm.value).forEach(([k, v]) =>
      fd.append(k, v as any)
    );

    this.api.registerSme(fd).subscribe({
      next: () => {
        alert('SME registration submitted!');
        this.smeForm.reset();
        this.modalService.closeModal('sme-registration-modal');
      },
      error: err => {
        console.error(err);
        alert('Submission failed');
      }
    });
  }

  submitPartnership(): void {
    if (this.partnershipForm.invalid) return;

    const fd = new FormData();
    const val = this.partnershipForm.value;

    // Send the checkbox list as JSON
    fd.append('interestedIn', JSON.stringify(val.interestedIn));

    // Append all remaining fields except interestedIn
    Object.keys(val)
      .filter(k => k !== 'interestedIn')
      .forEach(k => fd.append(k, (val as any)[k]));

    this.api.partner(fd).subscribe({
      next: () => {
        alert('Partnership form submitted!');
        this.partnershipForm.reset();
        this.modalService.closeModal('organization-registration-modal');
      },
      error: err => {
        console.error(err);
        alert('Submission failed');
      }
    });
  }

  /* ================================================================== */
  /*  MODAL SHORTCUTS (optional)                                        */
  /* ================================================================== */


  ngAfterViewInit(): void {
    // Initialize modal functionality
    this.modalService.initializeModals();

  }

  // Method to open a modal - can be called from template
  openModal(modalId: string): void {
    this.modalService.openModal(modalId);
  }

  // Method to close a modal - can be called from template
  closeModal(modalId: string): void {
    this.modalService.closeModal(modalId);
  }

//   setupTrainingForm1(): void {

//     let isSubmitting = false;

//     formData.set('trainingFormat', trainingFormat.value);
//     formData.set('mailType', 'request_for_training');

//     try {
//       const response = await fetch('https://thegawindustries.com/api/v1/contact/request_for_training', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(Object.fromEntries(formData))
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Request submitted successfully!');
//         form.reset();
//       } else {
//         alert('Failed to submit request: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred. Please try again later.');
//     } finally {
//       isSubmitting = false;
//       submitButton.disabled = false;
//       submitButton.textContent = 'Submit';
//       this.modalService.closeModal('training-request-modal');
//     }
//   });
// }

// setupTrainingForm2(): void {
//   const form = document.getElementById('trainingForm2') as HTMLFormElement;
//   if(!form) return;

//   const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
//   let isSubmitting = false;

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const getAvailability = () => {
//       const checkedRadio = document.querySelector('input[name="availability"]:checked') as HTMLInputElement;
//       return checkedRadio ? checkedRadio.id : null;
//     };

//     const checkAvailability = getAvailability();
//     if (!checkAvailability) {
//       alert('Availability Required.');
//       return;
//     }

//     if (isSubmitting) return;
//     isSubmitting = true;
//     submitButton.disabled = true;
//     submitButton.textContent = 'Submitting...';

//     const formData = new FormData(form);
//     formData.set('availability', checkAvailability);
//     formData.set('mailType', 'sme_form');

//     try {
//       const response = await fetch('https://thegawindustries.com/api/v1/contact/sme_form', {
//         method: 'POST',
//         body: formData
//       });

//       if (!response.ok) throw new Error('Form submission failed');

//       alert('Form submitted successfully!');
//       form.reset();
//     } catch (error) {
//       console.error('Form Submission Error:', error);
//       alert('Form submission failed.');
//     } finally {
//       isSubmitting = false;
//       submitButton.disabled = false;
//       submitButton.textContent = 'Submit';
//       this.modalService.closeModal('sme-registration-modal');
//     }
//   });
// }

// setupPartnershipForm(): void {
//   const form = document.getElementById('partnershipForm') as HTMLFormElement;
//   if(!form) return;

//   const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
//   let isSubmitting = false;

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const getCheckedInterests = () => {
//       const checkboxes = document.querySelectorAll('input[name="interestedIn"]:checked') as NodeListOf<HTMLInputElement>;
//       return Array.from(checkboxes).map(checkbox => checkbox.value);
//     };

//     const interests = getCheckedInterests();
//     if (!interests || interests.length === 0) {
//       alert('Please select at least one area of interest');
//       return;
//     }

//     if (isSubmitting) return;
//     isSubmitting = true;
//     submitButton.disabled = true;
//     submitButton.textContent = 'Submitting...';

//     const formData = new FormData(form);

//     // Remove individual checkbox entries and add as a single array
//     document.querySelectorAll('input[name="interestedIn"]').forEach((checkbox: HTMLInputElement) => {
//       formData.delete('interestedIn');
//     });

//     // Add interests as a JSON string
//     formData.set('interestedIn', JSON.stringify(interests));
//     formData.set('mailType', 'transfer_partner');

//     try {
//       const response = await fetch('https://thegawindustries.com/api/v1/contact/transfer_partner', {
//         method: 'POST',
//         body: formData
//       });

//       if (!response.ok) throw new Error('Form submission failed');

//       alert('Form submitted successfully!');
//       form.reset();
//     } catch (error) {
//       console.error('Form Submission Error:', error);
//       alert('Form submission failed.');
//     } finally {
//       isSubmitting = false;
//       submitButton.disabled = false;
//       submitButton.textContent = 'Submit';
//       this.modalService.closeModal('organization-registration-modal');
//     }
//   });
// }
}
