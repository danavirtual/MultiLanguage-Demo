import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeverificationComponent } from './ageverification.component';

describe('AgeverificationComponent', () => {
  let component: AgeverificationComponent;
  let fixture: ComponentFixture<AgeverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeverificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
