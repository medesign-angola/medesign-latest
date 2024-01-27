import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IPost } from '@core/interfaces/post.interface';

@Component({
  selector: 'post-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostTemplateComponent {
  
  @Input() posts: IPost[] = [];
  @Input() paddingXForCardsContainer: number = 0;

}
