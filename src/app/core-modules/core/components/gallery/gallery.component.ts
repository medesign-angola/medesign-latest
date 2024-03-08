import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { GalleryService } from '@core/services/gallery/gallery.service';

@Component({
  selector: 'md-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ){ }

  galleryService = inject(GalleryService);
  activeIndex: number = 0;
  galleryItems: string[] = [
    'assets/images/works/odonto-clinic-web-ft-01.png',
    'assets/images/works/odonto-clinic-ft-01.png',
    'assets/images/works/odonto-clinic-ft-02.png',
    'assets/images/works/odonto-clinic-ft-03.png',
  ];

  ngOnInit(): void {
    // this.getItems();
    this.toggleOverflowBodyElement();
  }

  getItems(){
    this.galleryService.galleryItems.subscribe((items: string[]) => this.galleryItems = items);
  }

  toggleOverflowBodyElement(): void{
    if(isPlatformBrowser(this.platformId)){
      let bodyElement = document.querySelector('body') as HTMLElement;
    
      if(this.galleryService.showGallery$.getValue()){
        bodyElement.style.height = '95vh';
        bodyElement.style.overflow = 'hidden';

      } else {
        bodyElement.style.height = 'auto';
        bodyElement.style.overflow = '';
      }

    }
  }

  next(){
    if(this.activeIndex === this.galleryItems.length - 1){
      return;
    }

    this.activeIndex++;
  }

  prev(){
    if(this.activeIndex === 0){
      return;
    }

    this.activeIndex--;
  }

}
