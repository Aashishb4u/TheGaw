import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-trainings',
  standalone: false,
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit, AfterViewInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize modal functionality
    this.modalService.initializeModals();
    
    // Set up form submission handlers
    this.setupTrainingForm1();
    this.setupTrainingForm2();
    this.setupPartnershipForm();
  }

  // Method to open a modal - can be called from template
  openModal(modalId: string): void {
    this.modalService.openModal(modalId);
  }

  // Method to close a modal - can be called from template
  closeModal(modalId: string): void {
    this.modalService.closeModal(modalId);
  }

  setupTrainingForm1(): void {
    const form = document.getElementById('trainingForm1') as HTMLFormElement;
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    let isSubmitting = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (isSubmitting) return;
      isSubmitting = true;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const formData = new FormData(form);
      const trainingFormat = document.querySelector('input[name="trainingFormat"]:checked') as HTMLInputElement;
      
      if (!trainingFormat) {
        alert('Please select a training format');
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
        return;
      }

      formData.set('trainingFormat', trainingFormat.value);
      formData.set('mailType', 'request_for_training');

      try {
        const response = await fetch('https://thegawindustries.com/api/v1/contact/request_for_training', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
        });

        const result = await response.json();

        if (response.ok) {
          alert('Request submitted successfully!');
          form.reset();
        } else {
          alert('Failed to submit request: ' + result.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
        this.modalService.closeModal('training-request-modal');
      }
    });
  }

  setupTrainingForm2(): void {
    const form = document.getElementById('trainingForm2') as HTMLFormElement;
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    let isSubmitting = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const getAvailability = () => {
        const checkedRadio = document.querySelector('input[name="availability"]:checked') as HTMLInputElement;
        return checkedRadio ? checkedRadio.id : null;
      };

      const checkAvailability = getAvailability();
      if (!checkAvailability) {
        alert('Availability Required.');
        return;
      }

      if (isSubmitting) return;
      isSubmitting = true;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const formData = new FormData(form);
      formData.set('availability', checkAvailability);
      formData.set('mailType', 'sme_form');

      try {
        const response = await fetch('https://thegawindustries.com/api/v1/contact/sme_form', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) throw new Error('Form submission failed');

        alert('Form submitted successfully!');
        form.reset();
      } catch (error) {
        console.error('Form Submission Error:', error);
        alert('Form submission failed.');
      } finally {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
        this.modalService.closeModal('sme-registration-modal');
      }
    });
  }

  setupPartnershipForm(): void {
    const form = document.getElementById('partnershipForm') as HTMLFormElement;
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    let isSubmitting = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const getCheckedInterests = () => {
        const checkboxes = document.querySelectorAll('input[name="interestedIn"]:checked') as NodeListOf<HTMLInputElement>;
        return Array.from(checkboxes).map(checkbox => checkbox.value);
      };

      const interests = getCheckedInterests();
      if (!interests || interests.length === 0) {
        alert('Please select at least one area of interest');
        return;
      }

      if (isSubmitting) return;
      isSubmitting = true;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const formData = new FormData(form);
      
      // Remove individual checkbox entries and add as a single array
      document.querySelectorAll('input[name="interestedIn"]').forEach((checkbox: HTMLInputElement) => {
        formData.delete('interestedIn');
      });
      
      // Add interests as a JSON string
      formData.set('interestedIn', JSON.stringify(interests));
      formData.set('mailType', 'transfer_partner');

      try {
        const response = await fetch('https://thegawindustries.com/api/v1/contact/transfer_partner', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) throw new Error('Form submission failed');

        alert('Form submitted successfully!');
        form.reset();
      } catch (error) {
        console.error('Form Submission Error:', error);
        alert('Form submission failed.');
      } finally {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
        this.modalService.closeModal('organization-registration-modal');
      }
    });
  }
}
