import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { IWork, IWorkArea, IWorkAreaPreview } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';

const INITIAL_INDEX: number = 0;

@Component({
  selector: 'md-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit, OnChanges {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  loaderService = inject(LoaderService);

  @Input() theWork!: IWork;
  theScope!: string;
  hasPreviewImages: boolean = false;
  thePreview!: IWorkAreaPreview;
  thePretendedArea!: IWorkArea[];

  pageSectionEnum = PageSectionEnum;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.theScope = queryParams.get('activeScope') ?? '';
      this.onChangeScope();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChangeScope();
  }

  onChangeScope(){
    if(this.theWork && this.theWork.areas){
      let pretendedArea = this.theWork.areas.filter(scope => scope.slug === this.theScope);
      this.thePretendedArea = pretendedArea;
      if(pretendedArea && pretendedArea.length > INITIAL_INDEX){
        if(pretendedArea[INITIAL_INDEX].preview && pretendedArea[INITIAL_INDEX].preview.length > 0){
          this.hasPreviewImages = true;
          this.thePreview = pretendedArea[INITIAL_INDEX].preview[INITIAL_INDEX];
          
        }else{
          this.hasPreviewImages = false;
        }
      }
    }
  }

}
