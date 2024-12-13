import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprAffComponent } from './suppr-aff.component';

describe('SupprAffComponent', () => {
  let component: SupprAffComponent;
  let fixture: ComponentFixture<SupprAffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprAffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprAffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
