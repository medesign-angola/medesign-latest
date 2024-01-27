import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IWork } from '@core/interfaces/work.interface';

@Component({
  selector: 'md-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit, OnChanges {

  @Input() works: IWork[] = [];

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
