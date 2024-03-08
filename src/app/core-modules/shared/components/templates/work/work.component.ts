import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { IWork } from '@core/interfaces/work.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { generatePlaceholdersArray } from '@shared/helpers/placeholder.helper';

@Component({
  selector: 'work-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkTemplateComponent implements OnInit, OnChanges {

  public loaderService: LoaderService = inject(LoaderService);
  
  @Input() works: IWork[] = [];
  @Input() cardType: 'mixed' | 'big' | 'small' = 'mixed';
  @Input() showFloatedLabel: boolean = true;
  @Input() showFloatedDescription: boolean = true;
  @Input() cardsGap: number = 70;
  @Input() cardWidth: string = ''; // cardsGap / 2 = 35
  @Input() placeholderDimentions: string = '';
  @Input() totalPlaceholderCards: number = 4;
  placeholdersArray: number[] = [];

  pageSectionEnum = PageSectionEnum;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generatePlaceholders();
    // console.log(this.loaderService.getLoaderContainer());
  }

  generatePlaceholders(){
    this.placeholdersArray = generatePlaceholdersArray(this.totalPlaceholderCards);
  }
  
}
