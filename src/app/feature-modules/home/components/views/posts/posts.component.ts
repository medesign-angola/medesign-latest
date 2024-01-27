import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IPost } from '@core/interfaces/post.interface';

@Component({
  selector: 'md-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnChanges {
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @Input() posts: IPost[] = [];
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
