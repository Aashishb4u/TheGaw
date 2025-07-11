import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, catchError } from 'rxjs';

export interface DownloadFile {
  id: string;
  name: string;
  url: string;
  category?: string;
  productId?: string;
  fileType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private filesJsonPath = 'assets/json/downloads.json';
  private cachedFiles: DownloadFile[] | null = null;

  constructor(private http: HttpClient) { }

  /**
   * Get all available download files
   */
  getAllFiles(): Observable<DownloadFile[]> {
    // if (this.cachedFiles) {
    //   return of(this.cachedFiles);
    // }

    return this.http.get<DownloadFile[]>(this.filesJsonPath).pipe(
      map(files => {
        this.cachedFiles = files;
        return files;
      }),
      catchError(error => {
        console.error('Error loading download files:', error);
        return of([]);
      })
    );
  }

  /**
   * Get a specific file by its ID
   */
  getFileById(fileId: string): Observable<DownloadFile | null> {
    return this.getAllFiles().pipe(
      map(files => files.find(file => file.id === fileId) || null)
    );
  }

  /**
   * Get files by category
   */
  getFilesByCategory(category: string): Observable<DownloadFile[]> {
    return this.getAllFiles().pipe(
      map(files => files.filter(file => file.category === category))
    );
  }

  /**
   * Get files for a specific product
   */
  getFilesByProductId(productId: string): Observable<DownloadFile[]> {
    return this.getAllFiles().pipe(
      map(files => files.filter(file => file.productId === productId))
    );
  }

  /**
   * Get catalog file for a specific product
   */
  getProductCatalog(productId: string): Observable<DownloadFile | null> {
    return this.getAllFiles().pipe(
      map(files => files.find(file => 
        file.productId === productId && file.category === 'product-catalog') || null)
    );
  }

  /**
   * Get questionnaire file for a specific product
   */
  getProductQuestionnaire(productId: string): Observable<DownloadFile | null> {
    return this.getAllFiles().pipe(
      map(files => files.find(file => 
        file.productId === productId && file.category === 'product-questionnaire') || null)
    );
  }

  /**
   * Get download URL for a specific file by ID
   */
  getDownloadUrl(fileId: string): Observable<string | null> {
    return this.getFileById(fileId).pipe(
      map(file => file ? file.url : null)
    );
  }

  /**
   * Get download URL for a product catalog
   */
  getProductCatalogUrl(productId: string): Observable<string | null> {
    return this.getProductCatalog(productId).pipe(
      map(file => file ? file.url : null)
    );
  }

  /**
   * Get download URL for a product questionnaire
   */
  getProductQuestionnaireUrl(productId: string): Observable<string | null> {
    return this.getProductQuestionnaire(productId).pipe(
      map(file => file ? file.url : null)
    );
  }

  /**
   * Download a file by its ID
   */
  downloadFile(fileId: string): Observable<boolean> {
    return this.getFileById(fileId).pipe(
      map(file => {
        if (!file) {
          console.error(`File with ID ${fileId} not found`);
          return false;
        }

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        return true;
      })
    );
  }
}
