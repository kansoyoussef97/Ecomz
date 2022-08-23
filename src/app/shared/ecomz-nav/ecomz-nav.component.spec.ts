import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomzNavComponent } from './ecomz-nav.component';

describe('EcomzNavComponent', () => {
  let component: EcomzNavComponent;
  let fixture: ComponentFixture<EcomzNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomzNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomzNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
