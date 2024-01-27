import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.css']
})
export class LogotypeComponent implements OnInit, OnChanges {

  @Input() brandColor: string = 'white';

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
