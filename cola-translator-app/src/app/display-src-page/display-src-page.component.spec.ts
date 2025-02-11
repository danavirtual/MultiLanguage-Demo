import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySrcPageComponent } from './display-src-page.component';

describe('DisplaySrcPageComponent', () => {
  let component: DisplaySrcPageComponent;
  let fixture: ComponentFixture<DisplaySrcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySrcPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySrcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
