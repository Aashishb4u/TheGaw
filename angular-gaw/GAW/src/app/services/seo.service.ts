import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import seoConfigJson from '../../../public/assets/json/seo.json';

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
    private meta: Meta
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
  }

  setSeoForPath(path: string): void {
    this.updateSeoForPath(path);
  }
}
