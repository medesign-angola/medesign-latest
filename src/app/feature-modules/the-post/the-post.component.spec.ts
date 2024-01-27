import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePostComponent } from './the-post.component';

describe('ThePostComponent', () => {
  let component: ThePostComponent;
  let fixture: ComponentFixture<ThePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
