import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  constructor() { }
  
  /**
   * Initialize modal functionality for a component
   */
  initializeModals(): void {
    setTimeout(() => {
      // Get all modal open buttons
      const openModalBtns = document.querySelectorAll(".open-modal-btn");
      debugger;
      // Add click event listeners to each button
      openModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetModalId = btn.getAttribute("data-target"); // Get target modal ID
          const targetModal = document.getElementById(targetModalId); // Get the modal element
  
          if (targetModal) {
            targetModal.classList.remove("hidden"); // Show the modal
  
            // Add event listener to close button for this modal
            const closeModalBtn = targetModal.querySelector(".close-modal-btn");
            if (closeModalBtn) {
              closeModalBtn.addEventListener("click", () => {
                targetModal.classList.add("hidden");
              });
            }
  
            // Close modal when clicking outside content
            targetModal.addEventListener("click", (e) => {
              if (e.target === targetModal) {
                targetModal.classList.add("hidden");
              }
            });
          }
        });
      });
    }, 0);
  }
  
  /**
   * Open a specific modal by ID
   * @param modalId The ID of the modal to open
   */
  openModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }
  
  /**
   * Close a specific modal by ID
   * @param modalId The ID of the modal to close
   */
  closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
    }
  }
}