import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiLookupComponent } from './udi-lookup.component';

describe('UdiLookupComponent', () => {
  let component: UdiLookupComponent;
  let fixture: ComponentFixture<UdiLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdiLookupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
