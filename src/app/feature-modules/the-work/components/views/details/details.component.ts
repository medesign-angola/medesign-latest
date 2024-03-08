import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { IWork } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';

@Component({
  selector: 'md-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() theWork!: IWork;
  theScope!: string;
  hasOptionalInfo: boolean = false;
  optionalInfo!: { name: string, value: string }[];

  pageSectionEnum = PageSectionEnum;

  public laoderService: LoaderService = inject(LoaderService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParams=> {
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
      if(pretendedArea && pretendedArea.length > 0){
        if(pretendedArea[0].optionalInfo){
          this.hasOptionalInfo = true;
          this.optionalInfo = pretendedArea[0].optionalInfo;

        }else{
          this.hasOptionalInfo = false;
        }
      }
    }
  }

}
