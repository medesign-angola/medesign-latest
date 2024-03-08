import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWorkComponent } from './the-work.component';

describe('TheWorkComponent', () => {
  let component: TheWorkComponent;
  let fixture: ComponentFixture<TheWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
