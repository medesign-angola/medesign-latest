import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, OnInit, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { PostFacade } from '@core/facades/post.facade';
import { IPost } from '@core/interfaces/post.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'md-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private postFacade: PostFacade
  ){}

  @ViewChild('headerTopContentElement') headerTopElement!: ElementRef<HTMLElement>;

  @ViewChild('siteHeader') siteHeader!: ElementRef<HTMLElement>;

  @Output() siteHeaderHeight: EventEmitter<number> = new EventEmitter<number>();

  headerHeight: string = '75px';

  menuMobileVisible: boolean = false;
  searchPanelVisible: boolean = false;

  searchTermInput: string = '';
  searchedPosts: IPost[] = [];

  isSearching$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.siteHeaderHeight.emit(this.headerTopElement.nativeElement.clientHeight);

    // this.headerHeight = this.headerTopElement.nativeElement.clientHeight;
    this.changeDetectorRef.detectChanges();
  }

  openMenu(){
    this.menuMobileVisible = true;
    this.closeSearchPanel();
    this.changeHeaderHeight()
  }

  closeMenu(){
    this.menuMobileVisible = false;
    this.changeHeaderHeight()
  }

  toggleMenu(){
    this.menuMobileVisible = !this.menuMobileVisible;
    if(this.menuMobileVisible){
      this.closeSearchPanel();
    }
    this.changeHeaderHeight()
  }

  openSearchPanel(){
    this.searchPanelVisible = true;
    this.closeMenu();
    this.changeHeaderHeight();
  }

  closeSearchPanel(){
    this.searchPanelVisible = false;
    this.searchedPosts = [];
    this.changeHeaderHeight();
  }

  toggleSearchPanel(){
    this.searchPanelVisible = !this.searchPanelVisible;
    if(this.searchPanelVisible){
      this.closeMenu();
    }
    this.changeHeaderHeight();
  }

  changeHeaderHeight(){
    if(this.menuMobileVisible || this.searchPanelVisible){
      this.headerHeight = '100vh';
      this.overflowHiddenOnBody();
    }else{
      this.headerHeight = '75px';
      this.overflowAutoOnBody();
    }
  }

  overflowHiddenOnBody(){
    if(isPlatformBrowser(this.platformId)){
      let bodyElement = document.querySelector('body') as HTMLElement;
      bodyElement.style.height = '90vh';
      bodyElement.style.overflow = 'hidden';
    }
  }

  overflowAutoOnBody(){
    if(isPlatformBrowser(this.platformId)){
      let bodyElement = document.querySelector('body') as HTMLElement;
      bodyElement.style.height = 'auto';
      bodyElement.style.overflow = 'auto';
    }
  }

  searchByTerm(){
    this.searchedPosts = [];
    this.isSearching$.next(true);
    this.postFacade.searchPostOnApiByTerm(this.searchTermInput).subscribe((searchResults: IPost[]) => {
      this.searchedPosts = searchResults;
      this.isSearching$.next(false);
    });
  }

}
