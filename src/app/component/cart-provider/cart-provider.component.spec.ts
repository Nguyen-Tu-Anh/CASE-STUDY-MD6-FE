import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProviderComponent } from './cart-provider.component';

describe('CartProviderComponent', () => {
  let component: CartProviderComponent;
  let fixture: ComponentFixture<CartProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
