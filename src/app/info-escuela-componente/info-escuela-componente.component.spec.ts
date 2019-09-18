import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEscuelaComponenteComponent } from './info-escuela-componente.component';

describe('InfoEscuelaComponenteComponent', () => {
  let component: InfoEscuelaComponenteComponent;
  let fixture: ComponentFixture<InfoEscuelaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEscuelaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEscuelaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
