import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiFattureComponent } from './aggiungi-fatture.component';

describe('AggiungiFattureComponent', () => {
  let component: AggiungiFattureComponent;
  let fixture: ComponentFixture<AggiungiFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
