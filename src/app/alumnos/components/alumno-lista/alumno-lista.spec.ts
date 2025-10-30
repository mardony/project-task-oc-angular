import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoLista } from './alumno-lista';

describe('AlumnoLista', () => {
  let component: AlumnoLista;
  let fixture: ComponentFixture<AlumnoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
