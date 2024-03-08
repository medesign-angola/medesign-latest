import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { LoaderService } from '@core/services/loader/loader.service';

@Component({
  selector: 'md-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnChanges {
  @Input() heroCoverImage: string = '';
  
  public loaderService: LoaderService = inject(LoaderService);

  pageSectionEnum = PageSectionEnum;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
