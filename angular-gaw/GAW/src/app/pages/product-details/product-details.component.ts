import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  catalogUrl: string | null = null;
  questionnaireUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private downloadService: DownloadService
  ) { }

  ngOnInit(): void {
    // Get the product ID from the route
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    
    // Load catalog URL
    this.downloadService.getProductCatalogUrl(this.productId).subscribe(url => {
      this.catalogUrl = url;
    });
    
    // Load questionnaire URL
    this.downloadService.getProductQuestionnaireUrl(this.productId).subscribe(url => {
      this.questionnaireUrl = url;
    });
  }
}
