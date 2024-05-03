import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOServiceService {
  titleMeta:Title = inject(Title)
  meta:Meta = inject(Meta)
  
  updateTitle(title: string) {
    this.titleMeta.setTitle(title);
  }

  updateMetaTags(title: string, description: string, imageUrl: string) {
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
  }
  
}
