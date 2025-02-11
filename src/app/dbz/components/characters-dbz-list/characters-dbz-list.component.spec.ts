import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDbzListComponent } from './characters-dbz-list.component';

describe('CharactersDbzListComponent', () => {
  let component: CharactersDbzListComponent;
  let fixture: ComponentFixture<CharactersDbzListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersDbzListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersDbzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
