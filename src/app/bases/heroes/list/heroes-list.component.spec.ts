import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';

describe('ListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
