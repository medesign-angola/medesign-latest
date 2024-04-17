import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroCoverImageEnum } from '@core/Enums/hero.enum';
import { PageSectionEnum } from '@core/Enums/page-section.enum';
import { PostFacade } from '@core/facades/post.facade';
import { IPost } from '@core/interfaces/post.interface';
import { LoaderService } from '@core/services/loader/loader.service';
import { MetaTagsService } from '@shared/services/meta/meta-tags.service';
import { ScrollerService } from '@shared/services/scroller/scroller.service';

@Component({
  selector: 'md-the-post',
  templateUrl: './the-post.component.html',
  styleUrl: './the-post.component.css'
})
export class ThePostComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private postFacade = inject(PostFacade);
  public loaderService = inject(LoaderService);
  private scrollService = inject(ScrollerService);
  private metaTags = inject(MetaTagsService);
  
  thePost: IPost | null = null;

  heroCoverImageEnum = HeroCoverImageEnum;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param => {

      this.scrollService.initialNavigation();

      const post = param.get('post') ?? 'no-post-reference';

      if(post !== 'no-post-reference'){
        this.loaderService.setLoading(PageSectionEnum.POST, true);
  
        this.postFacade.getPostBySlug(post).subscribe({
          next: (thePost: IPost[] | null) => {
  
            this.thePost = (thePost) ? thePost[0] : null;
  
            if(this.thePost){
              this.metaTags.addSocialMediaMetaTags(this.thePost);
              this.loaderService.setLoading(PageSectionEnum.POST, false);
              
            }else{
              this.loaderService.loadingActionAfterTryFetching(PageSectionEnum.POST);
            }
          }
        });
        
      }else{

      }

    });
  }

}
