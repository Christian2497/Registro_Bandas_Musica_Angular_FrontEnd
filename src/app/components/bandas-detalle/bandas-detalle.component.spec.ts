import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasDetalleComponent } from './bandas-detalle.component';

describe('BandasDetalleComponent', () => {
  let component: BandasDetalleComponent;
  let fixture: ComponentFixture<BandasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
