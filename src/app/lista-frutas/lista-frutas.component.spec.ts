import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrutasComponent } from './lista-frutas.component';

describe('ListaFrutasComponent', () => {
  let component: ListaFrutasComponent;
  let fixture: ComponentFixture<ListaFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFrutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
