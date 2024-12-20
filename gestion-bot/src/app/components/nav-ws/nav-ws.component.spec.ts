import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWsComponent } from './nav-ws.component';

describe('NavWsComponent', () => {
  let component: NavWsComponent;
  let fixture: ComponentFixture<NavWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavWsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
