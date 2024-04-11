import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroCoverImageEnum } from '@core/Enums/hero.enum';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { SPECIAL_CATEGORY } from '@core/constants/category.const';
import { PostFacade } from '@core/facades/post.facade';
import { ICategory, ICategoryChildren } from '@core/interfaces/categories.interface';
import { IPost } from '@core/interfaces/post.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';

@Component({
  selector: 'md-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  
  private postFacade: PostFacade = inject(PostFacade);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private scrollerService: ScrollerService = inject(ScrollerService);
  private loaderService: LoaderService = inject(LoaderService);

  @ViewChild('displaySectionElementRef') displaySectionElement!: ElementRef<HTMLElement>;

  categories: ICategory[] = [];
  posts: IPost[] = [];
  postsToDisplayWithFilter: IPost[] = [];
  lastSelectedScopeIndex: number = -1;

  heroCoverImageEnum = HeroCoverImageEnum;

  pageSectionEnum = PageSectionEnum;

  searchTerm: string = '';

  ngOnInit(): void {

    this.scrollerService.initialNavigation();

    this.postFacade.getPostCategories().subscribe((incomingCategories: ICategory[]) => this.categories = incomingCategories);

    let intervalToCatchCategories = setInterval(() => {

      if(this.categories.length === 0){ 
        return;

      }else{

        this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
          const queryScope = queryParams.get('scope') ?? SPECIAL_CATEGORY.slug;
          const queryChildren = queryParams.get('children');
          
          this.loaderService.setLoading(PageSectionEnum.BLOG, true);

          this.searchTerm = '';

          this.changeSelectedScope(queryScope, queryChildren);

          if(queryScope === SPECIAL_CATEGORY.slug){
            this.postFacade.getPosts().subscribe({
              next: (incomingPosts: IPost[]) => {
                this.posts = incomingPosts
                if(this.posts.length > 0){
                  this.loaderService.setLoading(PageSectionEnum.BLOG, false);
                
                }else{
                  this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.BLOG);
                }
              }
            });


          }else{
            this.postFacade.getPostsByCategories(queryScope, queryChildren).subscribe({
              next: (incomingPosts: IPost[]) => {
                this.posts = incomingPosts
                if(this.posts.length > 0){
                  this.loaderService.setLoading(PageSectionEnum.BLOG, false);
                
                }else{
                  this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.BLOG);
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
      
      if(this.categories[selectedScopeIndex].childrens){
        let selectedChildrenScopeIndex = this.categories[selectedScopeIndex].childrens.findIndex((children: ICategoryChildren) => children.slug === queryChildren);
        if(this.categories[selectedScopeIndex].childrens[selectedChildrenScopeIndex])
          this.categories[selectedScopeIndex].childrens[selectedChildrenScopeIndex].isActive = true;
      }
    
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

  changeCategoryVisibilityEventHandler(categroyId: number): void{
    let category: ICategory | undefined = this.categories.find((category: ICategory) => category.id === categroyId);
    if(category){
      category.isOpen = !category.isOpen;
    }
  }

  searchByTermEventHandler(searchTerm: string): void{
    this.searchTerm = searchTerm;
    this.postsToDisplayWithFilter = this.posts.filter(post => post.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
