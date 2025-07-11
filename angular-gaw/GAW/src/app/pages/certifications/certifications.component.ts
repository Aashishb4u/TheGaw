import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DownloadService, DownloadFile } from '../../services/download.service';

@Component({
  selector: 'app-certifications',
  standalone: false,
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  policyFiles: DownloadFile[] = [];
  certificateFiles: DownloadFile[] = [];
  isLoading = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private downloadService: DownloadService) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.loadFiles();
    }
  }

  loadFiles(): void {
    this.downloadService.getAllFiles().subscribe(files => {
      this.policyFiles = files.filter(file => file.category === 'policy');
      this.certificateFiles = files.filter(file => file.category === 'certificate');
      this.isLoading = false;
    });
  }

  downloadFile(fileId: string): void {
    this.downloadService.downloadFile(fileId).subscribe(success => {
      if (!success) {
        console.error(`Failed to download file with ID: ${fileId}`);
        // You could show a user-friendly error message here
      }
    });
  }
}
