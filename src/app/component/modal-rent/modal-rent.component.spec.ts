import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentComponent } from './modal-rent.component';

describe('ModalRentComponent', () => {
  let component: ModalRentComponent;
  let fixture: ComponentFixture<ModalRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
