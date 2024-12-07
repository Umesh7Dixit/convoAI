import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSupplierComponent } from './brand-supplier.component';

describe('BrandSupplierComponent', () => {
  let component: BrandSupplierComponent;
  let fixture: ComponentFixture<BrandSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSupplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
