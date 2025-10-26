import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCampoList } from './personal-campo-list';

describe('PersonalCampoList', () => {
  let component: PersonalCampoList;
  let fixture: ComponentFixture<PersonalCampoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalCampoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCampoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
