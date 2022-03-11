import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserAndProviderComponent } from './show-user-and-provider.component';

describe('ShowUserAndProviderComponent', () => {
  let component: ShowUserAndProviderComponent;
  let fixture: ComponentFixture<ShowUserAndProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserAndProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserAndProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
