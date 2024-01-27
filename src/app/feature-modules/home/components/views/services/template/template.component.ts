import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IService } from '@core/interfaces/service.interface';

@Component({
  selector: 'service-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class ServiceTemplateComponent implements OnInit, OnChanges {

  @Input() services: IService[] = [];
  @Input() paddingXForCardsContainer: number = 0;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
