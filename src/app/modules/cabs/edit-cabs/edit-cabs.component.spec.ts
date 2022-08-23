import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCabsComponent } from './edit-cabs.component';

describe('EditCabsComponent', () => {
  let component: EditCabsComponent;
  let fixture: ComponentFixture<EditCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
