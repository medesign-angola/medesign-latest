import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IPost } from '@core/interfaces/post.interface';
import { IMeta } from '@core/interfaces/services/imeta.interface';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  private url: string = '';

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if(isPlatformBrowser(this.platformId)){
      this.url = window.location.href;
    }
  }

  addMetaTags(metaTag: IMeta): boolean{

    this.meta.addTag({ name: 'og:title', content: metaTag.title });
    this.meta.addTag({ name: 'og:description', content: metaTag.description });
    this.meta.addTag({ name: 'og:image', content: metaTag.image });
    this.meta.addTag({ name: 'og:url', content: metaTag.url });

    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:title', content: metaTag.title });
    this.meta.addTag({ name: 'twitter:description', content: metaTag.description });
    this.meta.addTag({ name: 'twitter:image', content: metaTag.image });
    this.meta.addTag({ name: 'twitter:url', content: metaTag.url });

    return true;

  }

  addSocialMediaMetaTags(thePost: IPost): boolean{

    this.meta.addTag({ name: 'og:title', content: thePost.title });
    this.meta.addTag({ name: 'og:description', content: thePost.content });
    this.meta.addTag({ name: 'og:image', content: thePost.imagePath });
    this.meta.addTag({ name: 'og:url', content: this.url });

    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:title', content: thePost.title });
    this.meta.addTag({ name: 'twitter:description', content: thePost.content });
    this.meta.addTag({ name: 'twitter:image', content: thePost.imagePath });
    this.meta.addTag({ name: 'twitter:url', content: this.url });

    return true;
  }

}
