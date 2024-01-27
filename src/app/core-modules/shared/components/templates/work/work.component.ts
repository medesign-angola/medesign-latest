import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IWork } from '@core/interfaces/work.interface';

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

  class: string = '';

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cardClass();
  }

  cardClass() {
    switch(this.cardType){
      case 'mixed':
        this.class = 'w-[360px] h-[370px] xl:w-[600px] xl:h-[600px]';
        break;
      case 'big':
        this.class = 'w-[600px] h-[600px]';
        break;
      default:
        this.class = 'w-[360px] h-[370px]';
    }
  }
  
}
