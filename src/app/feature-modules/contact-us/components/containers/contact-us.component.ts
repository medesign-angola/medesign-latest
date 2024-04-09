import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'md-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  goback(){
    if(isPlatformBrowser(this.platformId)){
      window.history.back();
    }
  }

}
