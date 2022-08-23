import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCabsComponent } from './new-cabs.component';

describe('NewCabsComponent', () => {
  let component: NewCabsComponent;
  let fixture: ComponentFixture<NewCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
