import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IWork } from '@core/interfaces/work.interface';
import { generatePlaceholdersArray } from '@shared/helpers/placeholder.helper';

@Component({
  selector: 'work-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkTemplateComponent implements OnInit, OnChanges {

  @Input() works: IWork[] = [];
  @Input() cardType: 'mixed' | 'big' | 'small' = 'mixed';
  @Input() showFloatedLabel: boolean = true;
  @Input() showFloatedDescription: boolean = true;
  @Input() cardsGap: number = 70;
  @Input() cardWidth: string = ''; // cardsGap / 2 = 35
  @Input() placeholderDimentions: string = '';
  @Input() totalPlaceholderCards: number = 4;
  placeholdersArray: number[] = [];

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.cardHeightFun();
    this.generatePlaceholders();
  }

  cardHeightFun(){
    switch(this.cardType){
      case 'mixed':
        this.placeholderDimentions = `${ this.cardWidth } h-[20rem] xl:h-[37.5rem]`;
        break;
      case 'big':
        this.placeholderDimentions = `${ this.cardWidth } h-[37.5rem]`;
        break;
      default:
        this.placeholderDimentions = `${ this.cardWidth } h-[20rem]`;
    }
  }

  generatePlaceholders(){
    this.placeholdersArray = generatePlaceholdersArray(this.totalPlaceholderCards);
  }
  
}
