import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggComuneComponent } from './agg-comune.component';

describe('AggComuneComponent', () => {
  let component: AggComuneComponent;
  let fixture: ComponentFixture<AggComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
