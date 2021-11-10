import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScategoriesComponent } from './add-scategories.component';

describe('AddScategoriesComponent', () => {
  let component: AddScategoriesComponent;
  let fixture: ComponentFixture<AddScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
