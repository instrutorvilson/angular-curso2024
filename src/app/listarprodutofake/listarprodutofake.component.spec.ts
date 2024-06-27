import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprodutofakeComponent } from './listarprodutofake.component';

describe('ListarprodutofakeComponent', () => {
  let component: ListarprodutofakeComponent;
  let fixture: ComponentFixture<ListarprodutofakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarprodutofakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarprodutofakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
