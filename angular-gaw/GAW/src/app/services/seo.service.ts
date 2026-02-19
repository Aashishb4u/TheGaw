import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import seoConfigJson from '../../../public/assets/json/seo.json';
import { UtilityService, Product } from './utility.service';

interface SeoConfigEntry {
  path: string;
  title: string;
  description: string;
  keywords: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly seoConfigPath = 'assets/json/seo.json';
  private config: SeoConfigEntry[] | null = null;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private utilityService: UtilityService
  ) {
    this.listenToRouteChanges();

    const initialUrl = this.router.url.split('?')[0];
    const initialPath = initialUrl.replace(/^\/+/, '') || 'home';
    this.updateSeoForPath(initialPath);
  }

  private listenToRouteChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const url = (event as NavigationEnd).urlAfterRedirects.split('?')[0];
        const normalizedPath = url.replace(/^\/+/, '') || 'home';
        this.updateSeoForPath(normalizedPath);
      });
  }

  private loadConfig(): Observable<SeoConfigEntry[]> {
    if (!this.config) {
      this.config = seoConfigJson as SeoConfigEntry[];
    }

    return of(this.config);
  }

  private updateSeoForPath(path: string): void {
    this.loadConfig().subscribe({
      next: config => {
        const exactMatch = config.find(entry => entry.path === path);
        const fallback = config.find(entry => entry.path === '*');
        const entry = exactMatch || fallback;

        if (!entry) {
          return;
        }

        this.applySeo(entry);
      },
      error: () => {}
    });
  }

  applySeo(entry: SeoConfigEntry): void {
    this.title.setTitle(entry.title);

    this.meta.updateTag({
      name: 'description',
      content: entry.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: entry.keywords
    });

    this.meta.updateTag({
      property: 'og:title',
      content: entry.title
    } as any);

    this.meta.updateTag({
      property: 'og:description',
      content: entry.description
    } as any);

    this.meta.updateTag({
      name: 'twitter:title',
      content: entry.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: entry.description
    });

    const productData = this.utilityService.getProductGalleryData(entry.path);
    if (productData && productData.length > 0) {
      const primaryProduct: Product = productData[0];
      const primaryImageId = primaryProduct.imageIds[0];
      const origin =
        typeof window !== 'undefined' && window.location && window.location.origin
          ? window.location.origin
          : 'https://thegawindustries.com';
      const imageUrl = `${origin}/assets/images/${primaryImageId}.png`;
      const imageAlt = primaryProduct.name;

      this.meta.updateTag({
        property: 'og:image',
        content: imageUrl
      } as any);

      this.meta.updateTag({
        property: 'og:image:alt',
        content: imageAlt
      } as any);

      this.meta.updateTag({
        name: 'twitter:image',
        content: imageUrl
      });

      this.meta.updateTag({
        name: 'twitter:image:alt',
        content: imageAlt
      });
    }
  }

  setSeoForPath(path: string): void {
    this.updateSeoForPath(path);
  }
}
