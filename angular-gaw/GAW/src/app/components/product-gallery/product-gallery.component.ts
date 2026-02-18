import { Component, Input, OnInit } from '@angular/core';
import { UtilityService, Product } from '../../services/utility.service';

@Component({
  selector: 'app-product-gallery',
  standalone: false,
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit {
  @Input() pageName?: string;

  images: string[] = [];
  mainImage: string | null = null;
  productName: string | null = null;
  hasProducts = false;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    const products = this.utilityService.getProductGalleryData(this.pageName);
    if (products && products.length) {
      this.hasProducts = true;
      this.productName = products[0].name;
      this.images = this.buildImagePaths(products);
      if (this.images.length) {
        this.mainImage = this.images[0];
      }
    } else {
      this.hasProducts = false;
    }
  }

  selectImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.mainImage = this.images[index];
    }
  }

  private buildImagePaths(products: Product[]): string[] {
    const paths: string[] = [];
    products.forEach(product => {
      product.imageIds.forEach(id => {
        paths.push(`/assets/images/${id}.png`);
      });
    });
    return paths;
  }
}
