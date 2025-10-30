import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionList } from './inscripcion-list';

describe('InscripcionList', () => {
  let component: InscripcionList;
  let fixture: ComponentFixture<InscripcionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscripcionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
