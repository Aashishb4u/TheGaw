import { Directive, Input, HostListener, ElementRef, OnInit } from '@angular/core';
import { DownloadService } from '../services/download.service';

@Directive({
  selector: '[appDownloadLink]',
  standalone: false
})
export class DownloadLinkDirective implements OnInit {
  @Input() fileId: string = '';
  @Input() productId: string = '';
  @Input() fileType: 'catalog' | 'questionnaire' | 'general' = 'general';
  
  private url: string | null = null;

  constructor(
    private el: ElementRef,
    private downloadService: DownloadService
  ) {}

  ngOnInit() {
    this.loadUrl();
  }

  private loadUrl() {
    if (this.fileType === 'catalog' && this.productId) {
      this.downloadService.getProductCatalogUrl(this.productId).subscribe(url => {
        this.url = url;
        this.updateLinkAttributes();
      });
    } else if (this.fileType === 'questionnaire' && this.productId) {
      this.downloadService.getProductQuestionnaireUrl(this.productId).subscribe(url => {
        this.url = url;
        this.updateLinkAttributes();
      });
    } else if (this.fileId) {
      this.downloadService.getDownloadUrl(this.fileId).subscribe(url => {
        this.url = url;
        this.updateLinkAttributes();
      });
    }
  }

  private updateLinkAttributes() {
    if (this.url) {
      this.el.nativeElement.setAttribute('href', this.url);
      this.el.nativeElement.setAttribute('target', '_blank');
    } else {
      console.error(`No URL found for ${this.fileType} with ID: ${this.fileId || this.productId}`);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (!this.url) {
      event.preventDefault();
      console.error(`No URL found for ${this.fileType} with ID: ${this.fileId || this.productId}`);
    }
  }
}