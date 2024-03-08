import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '@core/interfaces/categories.interface';
import { IWork } from '@core/interfaces/work.interface';

@Component({
  selector: 'works-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  @Input() categories: ICategory[] = [];
  @Input() works: IWork[] = [];
  @Output() changeScopeEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() changeCategoryDropdownStatusEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  dropdownMaxHeights: { [key: string]: number } = { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(isPlatformBrowser(this.platformId)){
      // console.log(this.categories)
      this.categories.forEach((category: ICategory) => {
        if(category.childrens.length > 0){
          
          let intervalToFetchCategories = setInterval(() => {

            let categoryElementClass = document.querySelector(`.dropdown-${ category.slug }`) as HTMLElement;

            if(categoryElementClass){
              this.dropdownMaxHeights[category.slug] = 0;
              for (let index = 0; index < categoryElementClass.childElementCount; index++) {
                let item = categoryElementClass.children.item(index)
    
                if(item)
                  this.dropdownMaxHeights[category.slug] += item.clientHeight;
                  
              }
              clearInterval(intervalToFetchCategories);
            }

          }, 1000);

        }
      });
    }
  }

  changeScopeEvent(): void{
    this.changeScopeEventEmitter.emit(true);
  }

  dropdownEventEmitter(categoryId: number){
    this.changeCategoryDropdownStatusEventEmitter.emit(categoryId);
  }

  clickOncategoryAction(category: ICategory): void{

    if(category.childrens.length > 0){

      this.dropdownEventEmitter(category.id);

    }else{
      
      this.changeScopeEvent();
      this.router.navigate(['/works'], {
        queryParams: { scope: category.slug, children: undefined },
        queryParamsHandling: 'merge'
      });

    }

  }

}
