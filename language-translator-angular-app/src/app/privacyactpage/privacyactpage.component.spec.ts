import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyactpageComponent } from './privacyactpage.component';

describe('PrivacyactpageComponent', () => {
  let component: PrivacyactpageComponent;
  let fixture: ComponentFixture<PrivacyactpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyactpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
