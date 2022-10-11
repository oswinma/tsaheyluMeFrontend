import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginZoneComponent } from './login-zone.component';

describe('LoginZoneComponent', () => {
  let component: LoginZoneComponent;
  let fixture: ComponentFixture<LoginZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
