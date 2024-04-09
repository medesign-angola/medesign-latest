import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';

import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { IPostCategory } from '@core/interfaces/post.interface';
import { LoaderService } from '@core/services/loader/loader.service';

@Component({
  selector: 'md-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnChanges {

  loaderService = inject(LoaderService);

  pageSectionEnum = PageSectionEnum;

  @Input() categories: IPostCategory[] = [];
  @Input() viewsCount: number = 0;
  @Input() title: string = '';
  @Input() created_at: string = '';
  @Input() time_to_read: string = '';
  @Input() heroCoverImage: string = '';

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
