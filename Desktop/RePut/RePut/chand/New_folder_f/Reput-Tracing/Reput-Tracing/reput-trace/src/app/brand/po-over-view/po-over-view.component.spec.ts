import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoOverViewComponent } from './po-over-view.component';

describe('PoOverViewComponent', () => {
  let component: PoOverViewComponent;
  let fixture: ComponentFixture<PoOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoOverViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
