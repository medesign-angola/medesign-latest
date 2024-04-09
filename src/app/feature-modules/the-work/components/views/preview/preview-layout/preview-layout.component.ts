import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { PreviewEnum } from '@core/Enums/preview.enum';
import { IWorkArea, IWorkAreaPreview } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { BehaviorSubject } from 'rxjs';

const INITIAL_INDEX = 0;

@Component({
  selector: 'md-preview-layout',
  templateUrl: './preview-layout.component.html',
  styleUrl: './preview-layout.component.css'
})
export class PreviewLayoutComponent implements OnInit, OnChanges {

  @Input() thePreview!: IWorkAreaPreview;
  @Input() isLoading$!: boolean | null;
  @Input() thePretendedArea!: IWorkArea[];
  @Input() hasPreviewImages: boolean = false;
  previewEnum = PreviewEnum;

  showModal: boolean = false;
  modalImagePathPreviewer: string = '';

  public loaderService: LoaderService = inject(LoaderService);

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  previewImage(imagePath: string): void{
   let index = this.thePreview.images.findIndex(item => item.imagePath === imagePath);
   if(index >= 0){
    this.showPreviewModal(index)
   }else{
    return;
   } 
  }

  showPreviewModal(imageIndex: number){
    this.showModal = true;
    this.modalImagePathPreviewer = this.thePreview.images[imageIndex].imagePath;
  }

  closePreviewModal(){
    this.showModal = false;
  }

  get getFirstItem(){
    return this.thePreview.images[0].imagePath;
  }

  get getTopItems(){
    return this.thePreview.images.filter(item => item.position === 'top');
  }

  get getLastItem(){
    let lenght = this.thePreview.images.length;
    return this.thePreview.images[lenght - 1].imagePath;
  }

  get getBottomItems(){
    return this.thePreview.images.filter(item => item.position === 'bottom');
  }

  get getBodyItems(){
    return this.thePreview.images.filter(item => item.position === 'body');
  }

  get getItemsWithoutFirstAndLast() {
    return this.thePreview.images.slice(1, -1);
  }


}
