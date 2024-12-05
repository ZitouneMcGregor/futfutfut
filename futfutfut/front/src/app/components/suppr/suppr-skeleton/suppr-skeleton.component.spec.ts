import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprSkeletonComponent } from './suppr-skeleton.component';

describe('SupprSkeletonComponent', () => {
  let component: SupprSkeletonComponent;
  let fixture: ComponentFixture<SupprSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
