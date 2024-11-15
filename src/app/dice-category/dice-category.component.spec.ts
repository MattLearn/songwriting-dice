import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceCategoryComponent } from './dice-category.component';

describe('DiceCategoryComponent', () => {
  let component: DiceCategoryComponent;
  let fixture: ComponentFixture<DiceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
