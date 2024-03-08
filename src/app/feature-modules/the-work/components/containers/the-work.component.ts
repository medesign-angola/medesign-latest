import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroCoverImageEnum } from '@core/Enums/hero.enum';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { WorkFacade } from '@core/facades/work.facade';
import { IWork } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';

@Component({
  selector: 'md-the-work',
  templateUrl: './the-work.component.html',
  styleUrl: './the-work.component.css'
})
export class TheWorkComponent implements OnInit, AfterViewInit {

  private workFacade: WorkFacade = inject(WorkFacade);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private scrollerService: ScrollerService = inject(ScrollerService);
  private loaderService: LoaderService = inject(LoaderService);

  @ViewChild('detailsSectionElementRef') detailsSectionElement!: ElementRef<HTMLElement>;
  
  theWork!: IWork;
  heroCoverImageEnum = HeroCoverImageEnum;
  pageSectionEnum = PageSectionEnum;

  ngOnInit(): void {

    this.scrollerService.initialNavigation();

    this.activatedRoute.params.subscribe((params: Params) => {
      const clientNameSlug = params['client'];
      
      this.loaderService.setLoading(this.pageSectionEnum.WORK, true);
      this.workFacade.getWorkByClientNameSlug(clientNameSlug).subscribe({
        next: (works: IWork[]) => {
          this.theWork = works[0];

          if(this.theWork && works.length > 0){
            this.loaderService.setLoading(this.pageSectionEnum.WORK, false);
          }else{
            this.loaderService.loadingActionAfterTryFetching(this.pageSectionEnum.WORK);
          }
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.detailsSectionElement.nativeElement;
  }

  changeScopeEventHandler($event: boolean): void{
    if(this.detailsSectionElement.nativeElement){
      this.scrollerService.NavigationY(this.detailsSectionElement.nativeElement.offsetTop - 90); // 90 - possible header height
    }
  }

}