import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSkeletonComponent } from './modif-skeleton.component';

describe('ModifSkeletonComponent', () => {
  let component: ModifSkeletonComponent;
  let fixture: ComponentFixture<ModifSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
