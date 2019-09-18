import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaComponenteComponent } from './galeria-componente.component';

describe('GaleriaComponenteComponent', () => {
  let component: GaleriaComponenteComponent;
  let fixture: ComponentFixture<GaleriaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
