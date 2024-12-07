import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoTierViewComponent } from './po-tier-view.component';

describe('PoTierViewComponent', () => {
  let component: PoTierViewComponent;
  let fixture: ComponentFixture<PoTierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoTierViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoTierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
