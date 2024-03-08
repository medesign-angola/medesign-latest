import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  showGallery$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private galleryItems$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  set galleryItems(galleryItems: string[]){
    this.galleryItems$.next(galleryItems);
  }

  get galleryItems(): Observable<string[]>{
    return this.galleryItems$;
  }
  
}
