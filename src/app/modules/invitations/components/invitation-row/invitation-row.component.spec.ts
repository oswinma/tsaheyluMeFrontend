import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationRowComponent } from './invitation-row.component';

describe('InvitationRowComponent', () => {
  let component: InvitationRowComponent;
  let fixture: ComponentFixture<InvitationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
