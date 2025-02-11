import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTranslatedPageComponent } from './display-translated-page.component';

describe('DisplayTranslatedPageComponent', () => {
  let component: DisplayTranslatedPageComponent;
  let fixture: ComponentFixture<DisplayTranslatedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTranslatedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTranslatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
