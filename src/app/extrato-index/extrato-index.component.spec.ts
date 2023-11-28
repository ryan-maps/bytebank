import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoIndexComponent } from './extrato-index.component';

describe('ExtratoIndexComponent', () => {
  let component: ExtratoIndexComponent;
  let fixture: ComponentFixture<ExtratoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
