import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IPost } from '@core/interfaces/post.interface';
import { generatePlaceholdersArray } from '@shared/helpers/placeholder.helper';

@Component({
  selector: 'post-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostTemplateComponent implements OnInit {
  
  @Input() posts: IPost[] = [];
  @Input() paddingXForCardsContainer: number = 0;
  @Input() totalPlaceholderCards: number = 4;
  placeholdersArray: number[] = [];

  ngOnInit(): void {
    this.generatePlaceholders();
  }

  generatePlaceholders(){
    this.placeholdersArray = generatePlaceholdersArray(this.totalPlaceholderCards);
  }

}
