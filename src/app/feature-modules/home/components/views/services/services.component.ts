import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IService } from '@core/interfaces/service.interface';

@Component({
  selector: 'md-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() services: IService[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @ViewChild('headContent') headContent!: ElementRef<HTMLElement>;
  paddingXForCardsContainer: number = 0;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    this.paddingXForCardsContainer = this.headContent.nativeElement.offsetLeft;
    this.changeDetectorRef.detectChanges();
  }

}
