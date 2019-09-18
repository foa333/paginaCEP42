import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolamundoComponenteComponent } from './holamundo-componente.component';

describe('HolamundoComponenteComponent', () => {
  let component: HolamundoComponenteComponent;
  let fixture: ComponentFixture<HolamundoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolamundoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolamundoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
