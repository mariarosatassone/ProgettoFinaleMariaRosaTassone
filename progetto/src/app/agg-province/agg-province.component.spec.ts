import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggProvinceComponent } from './agg-province.component';

describe('AggProvinceComponent', () => {
  let component: AggProvinceComponent;
  let fixture: ComponentFixture<AggProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
