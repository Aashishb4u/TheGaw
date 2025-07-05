import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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
  
    if (selectedProduct) {
      // Prepare gallery with thumbnails and main image
      const thumbnailsHTML = selectedProduct
        .flatMap((product) =>
          product.imageIds.map(
            (id) => `
              <img 
                  class="border-2 border-black rounded-md p-1 transition-all duration-200 cursor-pointer size-16 nav-image hover:scale-105"
                  src="assets/images/${id}.png" 
                  data-main="assets/images/${id}.png" 
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
            src="assets/images/${selectedProduct[0].imageIds[0]}.png" 
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
}
