import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from '@core/interfaces/categories.interface';
import { IWork } from '@core/interfaces/work.interface';

@Component({
  selector: 'works-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() categories: ICategory[] = [];
  @Input() works: IWork[] = [];

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
