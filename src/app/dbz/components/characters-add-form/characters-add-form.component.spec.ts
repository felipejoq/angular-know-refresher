import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersAddFormComponent } from './characters-add-form.component';

describe('CharacterAddFormComponent', () => {
  let component: CharactersAddFormComponent;
  let fixture: ComponentFixture<CharactersAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
