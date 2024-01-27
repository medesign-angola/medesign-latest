import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'md-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('siteHeader') siteHeader!: ElementRef<HTMLElement>;
  expandInput: boolean =  false;
  @Output() siteHeaderHeight: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.siteHeaderHeight.emit(this.siteHeader.nativeElement.clientHeight);
  }

  toggleInput(){
    this.expandInput = !this.expandInput;
  }

}
