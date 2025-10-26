import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCampoForm } from './personal-campo-form';

describe('PersonalCampoForm', () => {
  let component: PersonalCampoForm;
  let fixture: ComponentFixture<PersonalCampoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalCampoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCampoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
