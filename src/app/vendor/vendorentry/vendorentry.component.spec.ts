import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorentryComponent } from './vendorentry.component';

describe('VendorentryComponent', () => {
  let component: VendorentryComponent;
  let fixture: ComponentFixture<VendorentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
