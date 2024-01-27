import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private chageDetectorRef: ChangeDetectorRef
  ) {}

  @ViewChild('siteHeader') siteHeader!: ElementRef<HTMLElement>;
  headerHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    
  }

  setHeaderHeight(event: any){
    this.headerHeight$.next(event);
    this.chageDetectorRef.detectChanges();
  }

}
