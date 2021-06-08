import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharacteristicComponent } from './pokemon-characteristic.component';

describe('PokemonCharacteristicComponent', () => {
  let component: PokemonCharacteristicComponent;
  let fixture: ComponentFixture<PokemonCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
