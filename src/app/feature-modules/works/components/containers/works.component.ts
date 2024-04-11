import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroCoverImageEnum } from '@core/Enums/hero.enum';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { SPECIAL_CATEGORY } from '@core/constants/category.const';
import { WorkFacade } from '@core/facades/work.facade';
import { ICategory, ICategoryChildren } from '@core/interfaces/categories.interface';
import { IWork } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'md-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit, AfterViewInit {

  private workFacade: WorkFacade = inject(WorkFacade);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private scrollerService: ScrollerService = inject(ScrollerService);
  private loaderService: LoaderService = inject(LoaderService);

  @ViewChild('displaySectionElementRef') displaySectionElement!: ElementRef<HTMLElement>;

  categories: ICategory[] = [];
  works: IWork[] = [];
  worksToDisplayWithFilter: IWork[] = [];
  lastSelectedScopeIndex: number = -1;

  heroCoverImageEnum = HeroCoverImageEnum;

  searchTerm: string = '';

  ngOnInit(): void {

    this.scrollerService.initialNavigation();

    this.workFacade.getWorkCategories().subscribe((incomingCategories: ICategory[]) => this.categories = incomingCategories);

    let intervalToCatchCategories = setInterval(() => {

      if(this.categories.length === 0){ 
        return;

      }else{

        this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
          const queryScope = queryParams.get('scope') ?? SPECIAL_CATEGORY.slug;
          const queryChildren = queryParams.get('children');
          
          this.loaderService.setLoading(PageSectionEnum.WORKS, true);

          this.changeSelectedScope(queryScope, queryChildren);

          if(queryScope === SPECIAL_CATEGORY.slug){
            this.workFacade.getWorks().subscribe({
              next: (incomingWorks: IWork[]) => {
                this.works = incomingWorks
                if(this.works.length > 0){
                  this.loaderService.setLoading(PageSectionEnum.WORKS, false);
                
                }else{
                  this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.WORKS);
                }
              }
            });

          }else{
            this.workFacade.getWorksByCategories(queryScope, queryChildren).subscribe({
              next: (incomingWorks: IWork[]) => {
                this.works = incomingWorks
                if(this.works.length > 0){
                  this.loaderService.setLoading(PageSectionEnum.WORKS, false);
                
                }else{
                  this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.WORKS);
                }
              } 
            });
          }
          
        });

        
        clearInterval(intervalToCatchCategories);
      }

    }, 1000)
    
  }

  ngAfterViewInit(): void {
    
  }

  changeSelectedScope(queryScope: string, queryChildren?: string): void{
    let activeScopeIndex = this.categories.findIndex((category: ICategory) => category.isActive === true);
    let selectedScopeIndex = this.categories.findIndex((category: ICategory) => category.slug === queryScope);

    this.changeCategoryIndexState(activeScopeIndex, false);
    this.changeCategoryIndexVisibility(activeScopeIndex, false);
    
    this.changeCategoryIndexState(selectedScopeIndex, true);
    this.changeCategoryIndexVisibility(selectedScopeIndex, true);

    this.deactivateAllOthers();
    if(queryChildren){
      
      let selectedChildrenScopeIndex = this.categories[selectedScopeIndex].childrens.findIndex((children: ICategoryChildren) => children.slug === queryChildren);
      if(this.categories[selectedScopeIndex].childrens[selectedChildrenScopeIndex])
        this.categories[selectedScopeIndex].childrens[selectedChildrenScopeIndex].isActive = true;
    
    }

  }

  deactivateAllOthers(){
    this.categories.forEach((category: ICategory) => {
      category.childrens.forEach((children: ICategoryChildren) => {
        children.isActive = false;
      })
    });
  }

  changeScopeEventHandler($event: boolean): void{
    if(this.displaySectionElement.nativeElement){
      this.scrollerService.NavigationY(this.displaySectionElement.nativeElement.offsetTop - 90); // 90 - possible header height
    }
  }

  changeCategoryIndexState(index: number, value: boolean): void{
    if(this.categories[index]){
      this.categories[index].isActive = value;
    }
  }
  changeCategoryIndexVisibility(index: number, value: boolean): void{
    if(this.categories[index]){
      this.categories[index].isOpen = value;
    }
  }

  changeCategoryVisibilityEventHandler(categoryId: number): void{
    let category: ICategory | undefined = this.categories.find((category: ICategory) => category.id === categoryId);
    if(category){
      category.isOpen = !category.isOpen;
    }
  }

  searchByTermEventHandler(searchTerm: string): void{
    this.searchTerm = searchTerm;
    this.worksToDisplayWithFilter = this.works.filter(work => work.clientName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
