import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '@core/interfaces/categories.interface';
import { IWork } from '@core/interfaces/work.interface';

@Component({
  selector: 'works-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  @ViewChild('categoriesContainer') categoriesContainerElement!: ElementRef<HTMLElement>;

  @Input() categories: ICategory[] = [];
  @Input() works: IWork[] = [];
  @Output() changeScopeEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() changeCategoryDropdownStatusEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  dropdownMaxHeights: { [key: string]: number } = { }
  pretendedCategoryWithChildrens: ICategory | undefined;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(isPlatformBrowser(this.platformId)){
      // console.log(this.categories)
      this.categories.forEach((category: ICategory) => {
        
        if(category.isActive){
          this.scrollIntoView(`ref-${ category.slug }`);
        }

        if(category.childrens.length > 0){

          if(category.isActive){
            this.pretendedCategoryWithChildrens = category;
          }
          
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

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.categoriesContainerElement.nativeElement;
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
      this.pretendedCategoryWithChildrens = category;

    }else{
      
      this.changeScopeEvent();
      this.pretendedCategoryWithChildrens = undefined;

      this.router.navigate(['/works'], {
        queryParams: { scope: category.slug, children: undefined },
        queryParamsHandling: 'merge'
      });

    }

  }

  scrollIntoView(ref: string): void{
    if(isPlatformBrowser(this.platformId)){

      let chipElement = document.querySelector(`.chip.${ ref }`) as HTMLElement;

      if (chipElement && this.categoriesContainerElement) {
        const containerWidth = this.categoriesContainerElement.nativeElement.offsetWidth;
        const chipElementWidth = chipElement.offsetWidth;
        const chipElementOffset = chipElement.offsetLeft;
    
        const scrollPosition = chipElementOffset - (containerWidth / 2) + (chipElementWidth / 2);
    
        this.categoriesContainerElement.nativeElement.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
      }
    }
  }

}
