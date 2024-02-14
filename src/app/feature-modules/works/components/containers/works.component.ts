import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkFacade } from '@core/facades/work.facade';
import { ICategory } from '@core/interfaces/categories.interface';
import { IWork } from '@core/interfaces/work.interface';
import { map, tap } from 'rxjs';

@Component({
  selector: 'md-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {

  private workFacade: WorkFacade = inject(WorkFacade);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  categories: ICategory[] = [];
  works: IWork[] = [];

  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
      const queryScope = queryParams.params.scope;
      const queryChildren = queryParams.params.children;
      
      this.workFacade.getWorkCategories().subscribe((incomingCategories: ICategory[]) => {
        this.categories = incomingCategories;
        this.changeSelectedScope(queryScope, queryChildren);
      });

    });
    this.workFacade.getWorks().subscribe((incomingWorks: IWork[]) => this.works = incomingWorks);
  }

  changeSelectedScope(queryScope: string, queryChildren?: string): void{

    let currentSelectedScopeIndex = this.categories.findIndex((category: ICategory) => category.slug === queryScope);
    // this.categories[currentSelectedScopeIndex].isActive = true;

  }

}
