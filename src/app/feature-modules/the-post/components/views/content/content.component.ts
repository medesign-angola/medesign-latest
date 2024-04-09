import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, inject } from '@angular/core';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { LoaderService } from '@core/services/loader/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'post-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ){}

  loaderService = inject(LoaderService);
  pageSectionEnum = PageSectionEnum;

  copied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  copyLabel: string = 'Copiar link';

  @Input() theContent!: string;
  @Input() currentUrl!: string;

  sharePostOn(to: 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'clipboard'){
    if(isPlatformBrowser(this.platformId)){
      switch(to){
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}%2F&amp;src=sdkpreparse`, '_blank')
          break;
        case 'linkedin':
          window.open(`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${window.location.href}`, '_blank');
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=${window.location.href}`, '_blank');
          break;
        case 'instagram':
          break;
        case 'clipboard':
          navigator.clipboard.writeText(window.location.href);
          this.copied.next(true);
          this.copyLabel = 'Link copiado!';

          setTimeout(() => {
            this.copied.next(false);
            this.copyLabel = 'Copiar link';
          }, 2000);

          break;
      }
    }
  }

}
