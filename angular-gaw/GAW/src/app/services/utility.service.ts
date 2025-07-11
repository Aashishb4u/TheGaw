import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

interface Product {
  name: string;
  imageIds: number[];
  link: string;
}

interface ProductsData {
  [key: string]: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // Define products data
  private products: ProductsData = {
    "top-loading-arms": [
      { name: "Top Loading Arms", imageIds: [48, 49], link: "top-loading-arms.html" },
    ],
    "bottom-loading-arms": [
      { name: "Bottom Loading Arms", imageIds: [50, 51], link: "bottom-loading-arms.html" },
    ],
    "marine-loading-arms": [
      { name: "Marine Loading Arms", imageIds: [52, 53], link: "marine-loading-arms.html" },
    ],
    "floating-suction-unit": [
      { name: "Floating Suction Unit", imageIds: [54, 55], link: "floating-suction-unit.html" },
    ],
    "positive-displacement-flow-meter": [
      { name: "Positive Displacement Flow Meter", imageIds: [56, 57], link: "positive-displacement-flow-meter.html" },
    ],
    "gravity-unloading-flow-meter": [
      { name: "Gravity Unloading Flow Meter", imageIds: [58, 59], link: "gravity-unloading-flow-meter.html" },
    ],
    "square-drive-torque-wrench": [
      { name: "Square Drive Torque Wrench", imageIds: [1, 2, 3, 4], link: "square-drive-torque-wrench.html" },
    ],
    "low-profile-torque-wrench": [
      { name: "Low Profile Torque Wrench", imageIds: [5, 6, 7], link: "low-profile-torque-wrench.html" },
    ],
    "pneumatic-torque-wrench": [
      { name: "Pneumatic Torque Wrench", imageIds: [8, 9, 10], link: "pneumatic-torque-wrench.html" },
    ],
    "torque-pump": [
      { name: "Torque Pump", imageIds: [11, 12], link: "torque-pump.html" },
    ],
    "spring-return-bolt-tensioner": [
      { name: "Spring Return Bolt Tensioner", imageIds: [15, 16, 17], link: "spring-return-bolt-tensioner.html" },
    ],
    "multi-stage-bolt-tensioner": [
      { name: "Multi Stage Bolt Tensioner", imageIds: [18, 19], link: "multi-stage-bolt-tensioner.html" },
    ],
    "subsea-bolt-tensioner": [
      { name: "Subsea Bolt Tensioner", imageIds: [20, 21], link: "subsea-bolt-tensioner.html" },
    ],
    "tensioning-pump": [
      { name: "Tensioning Pump", imageIds: [13, 14], link: "tensioning-pump.html" },
    ],
    "nut-splitter": [
      { name: "Nut Splitter", imageIds: [22, 23], link: "nut-splitter.html" },
    ],
    "flange-spreader": [
      { name: "Flange Spreader", imageIds: [26, 27, 28, 29], link: "flange-spreader.html" },
    ],
    "hydraulic-pullers": [
      { name: "Hydraulic Pullers", imageIds: [24, 25], link: "hydraulic-pullers.html" },
    ],
    "impact-sockets": [
      { name: "Impact Sockets", imageIds: [30, 31], link: "impact-sockets.html" },
    ],
    "hydrotesting-unit": [
      { name: "Hydrotesting Unit", imageIds: [32, 33, 34], link: "hydrotesting-unit.html" },
    ],
    "chemical-injection-skids": [
      { name: "Chemical Injection Skids", imageIds: [35, 36], link: "chemical-injection-skids.html" },
    ],
    "test-manifolds": [
      { name: "Test Manifolds", imageIds: [38, 37, 39], link: "test-manifolds.html" },
    ],
    "split-frame-cold-cutting-machine": [
      { name: "Split-Frame Cold Cutting Machine", imageIds: [40, 41, 42, 43], link: "split-frame-cold-cutting-machine.html" },
    ],
    "id-mounted-flange-facing-machine": [
      { name: "ID Mounted Flange Facing Machine", imageIds: [44, 45], link: "id-mounted-flange-facing-machine.html" },
    ],
    "manuel-flange-facing-machine": [
      { name: "Manual Flange Facing Machine", imageIds: [46, 47], link: "manuel-flange-facing-machine.html" },
    ],
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  /**
   * Sets up a product gallery based on the current route
   * @param galleryContainerId The ID of the gallery container element
   * @returns void
   */
  setupProductGallery(galleryContainerId: string = "product-gallery"): void {
    const galleryContainer = document.querySelector(`#${galleryContainerId}`);
    if (!galleryContainer) return;

    // Get current route path
    const currentPath = this.router.url;
    const pageName = currentPath.split('/').pop() || 'top-loading-arms';
    
    // Check if the page name exists in the products data
    const selectedProduct = this.products[pageName];
  
    if (selectedProduct && isPlatformBrowser(this.platformId)) {
      // if (!) return;
  
      // Prepare gallery with thumbnails and main image
      const thumbnailsHTML = selectedProduct
        .flatMap((product) =>
          product.imageIds.map(
            (id) => `
              <img
                  class="border-2 border-black rounded-md p-1 transition-all duration-200 cursor-pointer size-16 nav-image hover:scale-105"
                  src="/assets/images/${id}.png" 
                  data-main="/assets/images/${id}.png" 
                  alt="Product ${product.name}" 
              />
            `
          )
        )
        .join("");
  
      galleryContainer.innerHTML = `
        <div class="flex flex-col gap-5 shrink-0">
            ${thumbnailsHTML}
        </div>
        <img 
            class="w-[75%] p-2 border-2 border-black rounded-md ms-5 h-auto transition-all duration-300 main-image" 
            src="/assets/images/${selectedProduct[0].imageIds[0]}.png" 
            alt="Main Product" 
        />
      `;
  
      // Add event listeners for thumbnail clicks
      setTimeout(() => {
        const thumbnails = document.querySelectorAll(".nav-image");
        const mainImage = document.querySelector(".main-image");
  
        thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => {
            // Add fade-out effect
            if (mainImage) {
              mainImage.setAttribute('style', 'opacity: 0');
  
              // Update the main image after the fade-out animation
              setTimeout(() => {
                const imgElement = thumbnail as HTMLImageElement;
                const mainImageElement = mainImage as HTMLImageElement;
                
                if (mainImageElement && imgElement && imgElement.dataset['main']) {
                  mainImageElement.src = imgElement.dataset['main'];
                  // Add fade-in effect
                  mainImageElement.setAttribute('style', 'opacity: 1');
                }
              }, 200);
            }
          });
        });
      }, 0);
    } else {
      // Handle the case when no matching product is found for the page
      galleryContainer.innerHTML = `<p>No products found for this page.</p>`;
    }
  }

  /**
   * Sets up tab functionality for product pages
   * This should be called in the ngAfterViewInit of product components
   */
  setupTabFunctionality(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (!tabButtons.length || !tabContents.length) return;

        tabButtons.forEach((button) => {
          button.addEventListener('click', () => {
            // Remove active state from all buttons
            tabButtons.forEach((btn) => {
              btn.classList.remove('text-blue-600', 'shadow-[0px_-6px_10px_-3px_rgba(0,_0,_0,_0.1)]', 'font-semibold', 'bg-blue-600/10');
              btn.classList.add('text-gray-600', 'hover:bg-gray-100', 'font-medium', 'bg-blue-600/10');
              const indicator = btn.querySelector('.absolute');
              if (indicator) indicator.classList.add('hidden');
            });

            // Hide all tab contents
            tabContents.forEach((content) => {
              content.classList.add('hidden');
            });

            // Activate clicked tab button
            button.classList.add('text-blue-600', 'shadow-[0px_-6px_10px_-3px_rgba(0,_0,_0,_0.1)]', 'font-semibold');
            button.classList.remove('text-gray-600', 'hover:bg-gray-100', 'font-medium', 'bg-blue-600/10');
            const indicator = button.querySelector('.absolute');
            if (indicator) indicator.classList.remove('hidden');

            // Show corresponding tab content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
              tabContent.classList.remove('hidden');
            }
          });
        });

        // Activate the first tab by default if none is active
        const activeTab = document.querySelector('.tab-btn.text-blue-600');
        if (!activeTab && tabButtons.length > 0) {
          // Simulate a click on the first tab
          (tabButtons[0] as HTMLElement).click();
        }
      }, 0);
    }
  }

  /**
   * Removes tab event listeners
   * This should be called in the ngOnDestroy of product components
   */
  removeTabListeners(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tabButtons = document.querySelectorAll('.tab-btn');
      
      tabButtons.forEach((button) => {
        button.replaceWith(button.cloneNode(true));
      });
    }
  }

  /**
   * Applies scroll effects to the navbar
   * This should be called in the ngOnInit of components with a navbar
   */
  setupScrollActions(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove any existing scroll event listeners to prevent duplicates
      this.removeScrollListeners();
      
      // Add the new scroll event listener
      document.addEventListener('scroll', this.handleScroll);
    }
  }

  /**
   * Removes scroll event listeners
   * This should be called in the ngOnDestroy of components with a navbar
   */
  removeScrollListeners(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  /**
   * Handles the scroll event for the navbar
   */
  private handleScroll = (): void => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
      navbar.classList.add(
        '-translate-y-10', 
        'shadow-lg', 
        'border', 
        'border-gray-200', 
        'backdrop-filter', 
        'bg-white/60', 
        'backdrop-blur-xl', 
        'bg-opacity-30'
      );
    } else {
      navbar.classList.remove(
        '-translate-y-10', 
        'shadow-lg', 
        'border', 
        'border-gray-200', 
        'backdrop-filter', 
        'bg-white/60', 
        'backdrop-blur-xl', 
        'bg-opacity-30'
      );
    }
  }

  /**
   * Gets product data for a specific page
   * @param pageName The name of the page/product
   * @returns The product data or undefined if not found
   */
  getProductData(pageName: string): Product[] | undefined {
    return this.products[pageName];
  }

  /**
   * Gets all product data
   * @returns All product data
   */
  getAllProducts(): ProductsData {
    return this.products;
  }

  /**
   * Gets the current path from the router URL
   * @returns The current path (product name)
   */
  getCurrentPath(): string {
    const currentPath = this.router.url;
    return currentPath.split('/').pop() || '';
  }

  /**
   * Sets up file upload functionality
   */
  setupFileUpload(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const fileInput = document.getElementById('coverLetter') as HTMLInputElement;
        const fileUploadBlock = document.getElementById('file_upload_block');
        const emptyLabel = document.getElementById('empty_label');
        
        if (!fileInput || !fileUploadBlock || !emptyLabel) return;
        
        fileInput.addEventListener('change', (event) => {
          const target = event.target as HTMLInputElement;
          if (target.files && target.files.length > 0) {
            const fileName = target.files[0].name;
            fileUploadBlock.innerHTML = `
              <img class="h-6 w-6" src="assets/images/icons/upload_ico.png" alt="">
              ${fileName}
            `;

            const emptyLabel = document.getElementById('empty_label');
            emptyLabel.classList.add('hidden');
          }
        });
      }, 0);
    }
  }

  /**
   * Sets up form submission for product order forms
   * @param formId The ID of the form element
   * @param endpoint The API endpoint for form submission
   * @param productName The name of the product
   */
  setupFileUploadForm(formId: string, endpoint: string, productName: string): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const form = document.getElementById(formId) as HTMLFormElement;
        if (!form) return;
        
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          
          const fileInput = document.getElementById('coverLetter') as HTMLInputElement;
          if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            alert('Please select a file to upload');
            return;
          }
          
          const formData = new FormData();
          formData.append('mailType', 'product_order_form');
          formData.append('productName', productName.split('-').join(' ').toUpperCase());
          
          // Show loading state
          const submitButton = form.querySelector('.upload-button') as HTMLButtonElement;
          const originalText = submitButton.textContent || 'Submit';
          submitButton.textContent = 'Uploading...';
          submitButton.disabled = true;
          
          // Send the form data to the server
          fetch(endpoint, {
            method: 'POST',
            body: formData
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            alert('File uploaded successfully!');
            // Reset form
            form.reset();
            const fileUploadBlock = document.getElementById('file_upload_block');
            if (fileUploadBlock) {
              fileUploadBlock.innerHTML = `
                <img class="h-6 w-6" src="assets/images/icons/upload_ico.png" alt="">
                Upload Answered File
              `;
            }
            const emptyLabel = document.getElementById('empty_label');
            if (emptyLabel) {
              emptyLabel.classList.add('hidden');
              emptyLabel.textContent = productName;
            }
          })
          .catch(error => {
            console.error('Error:', error);
            alert('There was an error uploading your file. Please try again.');
          })
          .finally(() => {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          });
        });
      }, 0);
    }
  }
}
