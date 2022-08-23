import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabsFormComponent } from './cabs-form.component';

describe('CabsFormComponent', () => {
  let component: CabsFormComponent;
  let fixture: ComponentFixture<CabsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
