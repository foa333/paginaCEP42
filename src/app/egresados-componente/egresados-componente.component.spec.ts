import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadosComponenteComponent } from './egresados-componente.component';

describe('EgresadosComponenteComponent', () => {
  let component: EgresadosComponenteComponent;
  let fixture: ComponentFixture<EgresadosComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadosComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
