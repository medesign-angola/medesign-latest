import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { IPost } from '@core/interfaces/post.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { generatePlaceholdersArray } from '@shared/helpers/placeholder.helper';

@Component({
  selector: 'post-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostTemplateComponent implements OnInit {
  
  public loaderService: LoaderService = inject(LoaderService);

  @Input() posts: IPost[] = [];
  @Input() paddingXForCardsContainer: number = 0;
  @Input() totalPlaceholderCards: number = 4;
  @Input() postsWrap: boolean = false;
  placeholdersArray: number[] = [];

  pageSectionEnum = PageSectionEnum;

  ngOnInit(): void {
    this.generatePlaceholders();
  }

  generatePlaceholders(){
    this.placeholdersArray = generatePlaceholdersArray(this.totalPlaceholderCards);
  }

}
